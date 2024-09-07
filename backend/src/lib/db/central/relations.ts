import { relations } from "drizzle-orm";
import { companies, users } from "./schema";

export const userRelations = relations(users, ({ one }) => ({
  company: one(companies, {
    fields: [users.companyId],
    references: [companies.companyId],
  }),
}));

export const companyRelations = relations(companies, ({ many }) => ({
  users: many(users),
}));
