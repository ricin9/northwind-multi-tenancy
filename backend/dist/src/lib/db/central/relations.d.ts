export declare const userRelations: import("drizzle-orm").Relations<"users", {
    company: import("drizzle-orm").One<"companies", true>;
}>;
export declare const companyRelations: import("drizzle-orm").Relations<"companies", {
    users: import("drizzle-orm").Many<"users">;
}>;
