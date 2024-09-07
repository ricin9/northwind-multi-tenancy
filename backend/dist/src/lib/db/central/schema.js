import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const companies = sqliteTable("companies", {
    companyId: integer("company_id").primaryKey({
        autoIncrement: true
    }),
    companyName: text("name").notNull(),
    companySubdomain: text("subdomain").notNull().unique(),
    createdAt: text("created_at").notNull().default(sql`current_timestamp`)
});
export const users = sqliteTable("users", {
    userId: integer("user_id").primaryKey({
        autoIncrement: true
    }),
    username: text("username").unique().notNull(),
    password: text("password").notNull(),
    role: text("role", {
        enum: [
            "admin",
            "normal"
        ]
    }).notNull(),
    createdAt: text("created_at").notNull().default(sql`current_timestamp`),
    companyId: integer("company_id").notNull().references(()=>companies.companyId)
});
export const sessions = sqliteTable("sessions", {
    id: text("id").notNull().primaryKey(),
    userId: integer("user_id").notNull().references(()=>users.userId),
    expiresAt: integer("expires_at").notNull()
});
