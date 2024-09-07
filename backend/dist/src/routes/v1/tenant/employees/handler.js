import { OpenAPIHono } from "@hono/zod-openapi";
import { eq } from "drizzle-orm";
import { HTTPException } from "hono/http-exception";
import { employees } from "../../../../lib/db/tenant/schema";
import { advancedQuery } from "../../../../lib/util/filter-pagination-sorting";
import { generatePaginationMetadata } from "../../../../lib/util/paginationMetadata";
import { create, get, list, update } from "./openapi.routes";
export const employeesGroup = new OpenAPIHono().openapi(list, async (c)=>{
    const db = c.get("tenantDb");
    const filteringInput = c.req.valid("query");
    const { data, totalCount } = await advancedQuery(db, employees, filteringInput);
    const metadata = generatePaginationMetadata(c, totalCount);
    return c.json({
        metadata,
        data
    }, 200);
}).openapi(create, async (c)=>{
    const db = c.get("tenantDb");
    const employee = c.req.valid("json");
    const result = await db.insert(employees).values(employee);
    return c.json({
        employeeId: Number(result.lastInsertRowid)
    }, 201);
}).openapi(get, async (c)=>{
    const db = c.get("tenantDb");
    const { id } = c.req.valid("param");
    const employee = await db.query.employees.findFirst({
        where: eq(employees.employeeId, id)
    });
    if (!employee) {
        throw new HTTPException(404, {
            message: "employee not found"
        });
    }
    return c.json(employee);
}).openapi(update, async (c)=>{
    const db = c.get("tenantDb");
    const { id } = c.req.valid("param");
    const body = c.req.valid("json");
    const result = await db.select({
        employeeId: employees.employeeId
    }).from(employees).where(eq(employees.employeeId, id)).limit(1);
    if (result.length === 0) {
        throw new HTTPException(404, {
            message: "employee not found"
        });
    }
    const patchedEmployee = await db.update(employees).set(body).where(eq(employees.employeeId, id)).returning();
    return c.json(patchedEmployee);
});
