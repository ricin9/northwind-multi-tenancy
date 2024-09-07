import { OpenAPIHono } from "@hono/zod-openapi";
import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";

import { customers } from "../../../../lib/db/tenant/schema";
import { advancedQuery } from "../../../../lib/util/filter-pagination-sorting";
import { generatePaginationMetadata } from "../../../../lib/util/paginationMetadata";
import { create, get, list, update } from "./openapi.routes";
import type { Variables } from "../../../../lib/types/context-variables";

export const customersGroup = new OpenAPIHono<{ Variables: Variables }>()
  .openapi(list, async (c) => {
    const db = c.get("tenantDb")!;

    const filteringInput = c.req.valid("query");

    const { data, totalCount } = await advancedQuery(
      db,
      customers,
      filteringInput
    );
    const metadata = generatePaginationMetadata(c, totalCount);

    return c.json({ metadata, data }, 200);
  })

  .openapi(create, async (c) => {
    const db = c.get("tenantDb")!;
    const customer = c.req.valid("json");
    const result = await db.insert(customers).values(customer);
    return c.json(
      { customerId: result.lastInsertRowid?.toString() as string },
      201
    );
  })

  .openapi(get, async (c) => {
    const db = c.get("tenantDb")!;
    const { id } = c.req.valid("param");
    const customer = await db.query.customers.findFirst({
      where: eq(customers.customerId, id),
    });

    if (!customer) {
      throw new HTTPException(404, { message: "customer not found" });
    }

    return c.json(customer);
  })

  .openapi(update, async (c) => {
    const db = c.get("tenantDb")!;
    const { id } = c.req.valid("param");
    const body = c.req.valid("json");

    const result = await db
      .select({ customerId: customers.customerId })
      .from(customers)
      .where(eq(customers.customerId, id))
      .limit(1);

    if (result.length === 0) {
      throw new HTTPException(404, { message: "customer not found" });
    }

    const patchedCustomer = await db
      .update(customers)
      .set(body)
      .where(eq(customers.customerId, id))
      .returning();

    return c.json(patchedCustomer);
  });

// disabled temporarily because of problem with turso and FTS5, solvable
// .get(
//   "/search",
//   zValidator("query", z.object({ query: z.string() }).partial()),
//   async (c) => {
//     const { query } = c.req.valid("query");
//     const rows = query
//       ? await db.all(sql`SELECT * FROM CustomerSearch
//         JOIN Customers USING (CustomerId)
//         WHERE CustomerSearch MATCH ${query + "*"}
//         ORDER BY rank`)
//       : await db.select().from(customers);
//     return c.json(rows);
//   }
// )
