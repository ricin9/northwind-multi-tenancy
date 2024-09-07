import { createMiddleware } from "hono/factory";
import { getCookie } from "hono/cookie";
import { SESSION_COOKIE_NAME } from "../auth";
import { companies, sessions, users } from "../db/central/schema";
import { eq } from "drizzle-orm";
export const authenticationMiddleware = createMiddleware(async (c, next)=>{
    const session = getCookie(c, SESSION_COOKIE_NAME);
    if (!session) {
        c.set("User", null);
        return await next();
    }
    const db = c.get("centralDb");
    const [user] = await db.select({
        userId: users.userId,
        companyId: users.companyId,
        companySubdomain: companies.companySubdomain,
        expiresAt: sessions.expiresAt
    }).from(sessions).where(eq(sessions.id, session)).innerJoin(users, eq(sessions.userId, users.userId)).innerJoin(companies, eq(users.companyId, companies.companyId)).limit(1);
    const now = Date.now();
    if (user && user.expiresAt > now) {
        const { expiresAt, ...rest } = user;
        c.set("User", rest);
    } else {
        c.set("User", null);
    }
    await next();
});
