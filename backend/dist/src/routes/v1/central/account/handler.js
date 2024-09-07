import { OpenAPIHono } from "@hono/zod-openapi";
import { HTTPException } from "hono/http-exception";
import { eq } from "drizzle-orm";
import { getCookie, setCookie } from "hono/cookie";
import { SESSION_COOKIE_NAME } from "../../../../lib/auth";
import { companies, sessions, users } from "../../../../lib/db/central/schema";
import { generateRandomString, hashPassword, verifyPassword } from "../../../../lib/util/auth-utilities";
import { create, login, logout } from "./openapi.routes";
import { createClient } from "@tursodatabase/api";
import { env } from "hono/adapter";
export const accountsGroup = new OpenAPIHono().openapi(login, async (c)=>{
    const db = c.get("centralDb");
    const { username, password } = c.req.valid("json");
    const user = await db.query.users.findFirst({
        where: eq(users.username, username)
    });
    if (!user || !verifyPassword(user.password, password)) {
        throw new HTTPException(401, {
            message: "Invalid username or password"
        });
    }
    const session = generateRandomString();
    const expiresAt = Date.now() + 1000 * 60 * 60 * 24 * 90; // 90 days
    await db.insert(sessions).values({
        id: session,
        userId: user.userId,
        expiresAt
    });
    setCookie(c, SESSION_COOKIE_NAME, session, {
        expires: new Date(expiresAt)
    });
    return c.body(null, 201);
}).openapi(logout, async (c)=>{
    const db = c.get("centralDb");
    const session = getCookie(c, SESSION_COOKIE_NAME);
    await db.delete(sessions).where(eq(sessions.id, session || ""));
    setCookie(c, SESSION_COOKIE_NAME, "", {
        expires: new Date()
    });
    return c.body(null, 204);
}).openapi(create, async (c)=>{
    const db = c.get("centralDb");
    const body = c.req.valid("json");
    const company = await db.query.companies.findFirst({
        where: eq(companies.companySubdomain, body.companySubdomain)
    });
    if (company) {
        throw new HTTPException(409, {
            message: "subdomain already exists"
        });
    }
    // @ts-ignore this works fine but complains because of context, todo later
    const envars = env(c);
    const turso = createClient({
        org: envars.TURSO_ORGANIZATION_NAME,
        token: envars.TURSO_PLATFORM_AUTH_TOKEN
    });
    const data = await turso.databases.create(body.companySubdomain, {
        group: envars.TURSO_GROUP_NAME,
        schema: envars.TURSO_SCHEMA_DATABASE_NAME
    });
    const { password, ...rest } = body;
    const passwordHash = await hashPassword(password);
    const insertedIds = await db.transaction(async (tx)=>{
        const companyData = await tx.insert(companies).values({
            companySubdomain: body.companySubdomain,
            companyName: body.companyName
        });
        const userData = await tx.insert(users).values({
            username: body.username,
            password: passwordHash,
            role: "admin",
            companyId: Number(companyData.lastInsertRowid)
        });
        return {
            companyId: Number(companyData.lastInsertRowid),
            userId: Number(userData.lastInsertRowid)
        };
    });
    return c.json({
        ...insertedIds,
        ...rest
    }, 201);
});
