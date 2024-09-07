import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { createMiddleware } from "hono/factory";

import { centralTSchema } from "../db/central/tschema";
import { tenantTSchema } from "../db/tenant/tschema";
import type { Variables } from "../types/context-variables";
import {
  TURSO_CENTRAL_DATABASE_URL,
  TURSO_GROUP_AUTH_TOKEN,
  TURSO_ORGANIZATION_NAME,
} from "$env/static/private";

export const initCentralDb = createMiddleware(async (c, next) => {
  const authToken = TURSO_GROUP_AUTH_TOKEN;
  const centralDbUrl = TURSO_CENTRAL_DATABASE_URL;

  const centralTursoClient = createClient({ url: centralDbUrl, authToken });
  const centralDb = drizzle(centralTursoClient, { schema: centralTSchema });
  c.set("centralDb", centralDb);

  await next();
});

export const initTenantDb = createMiddleware<{ Variables: Variables }>(
  async (c, next) => {
    const companySubdomain = c.get("User")?.companySubdomain;

    // @ts-ignore - hmm will fix later

    const authToken = TURSO_GROUP_AUTH_TOKEN;

    if (!companySubdomain) {
      c.set("tenantDb", null);
    } else {
      const tenantDbUrl = makeTenantDbUrl({
        dbName: companySubdomain,
        orgName: TURSO_ORGANIZATION_NAME,
      });

      const tenantTursoClient = createClient({ url: tenantDbUrl, authToken });
      const tenantDb = drizzle(tenantTursoClient, { schema: tenantTSchema });
      c.set("tenantDb", tenantDb);
    }

    await next();
  }
);

type MakeTenantDbUrl = {
  orgName: string;
  dbName: string;
};

function makeTenantDbUrl(input: MakeTenantDbUrl) {
  const { orgName, dbName } = input;
  return `libsql://${dbName}-${orgName}.turso.io`;
}
