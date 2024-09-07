import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { createMiddleware } from "hono/factory";
import { env } from "hono/adapter";
import { centralTSchema } from "../db/central/tschema";
import { tenantTSchema } from "../db/tenant/tschema";
export const initCentralDb = createMiddleware(async (c, next)=>{
    const envars = env(c);
    const authToken = envars.TURSO_GROUP_AUTH_TOKEN;
    const centralDbUrl = envars.TURSO_CENTRAL_DATABASE_URL;
    const centralTursoClient = createClient({
        url: centralDbUrl,
        authToken
    });
    const centralDb = drizzle(centralTursoClient, {
        schema: centralTSchema
    });
    c.set("centralDb", centralDb);
    await next();
});
export const initTenantDb = createMiddleware(async (c, next)=>{
    const companySubdomain = c.get("User")?.companySubdomain;
    // @ts-ignore - hmm will fix later
    const envars = env(c);
    const authToken = envars.TURSO_GROUP_AUTH_TOKEN;
    if (!companySubdomain) {
        c.set("tenantDb", null);
    } else {
        const tenantDbUrl = makeTenantDbUrl({
            dbName: companySubdomain,
            orgName: envars.TURSO_ORGANIZATION_NAME
        });
        const tenantTursoClient = createClient({
            url: tenantDbUrl,
            authToken
        });
        const tenantDb = drizzle(tenantTursoClient, {
            schema: tenantTSchema
        });
        c.set("tenantDb", tenantDb);
    }
    await next();
});
function makeTenantDbUrl(input) {
    const { orgName, dbName } = input;
    return `libsql://${dbName}-${orgName}.turso.io`;
}
