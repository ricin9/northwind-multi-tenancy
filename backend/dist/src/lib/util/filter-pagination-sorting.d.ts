import type { SQLiteTableWithColumns } from "drizzle-orm/sqlite-core";
import { z } from "@hono/zod-openapi";
import { tenantTSchema } from "../db/tenant/tschema";
import type { LibSQLDatabase } from "drizzle-orm/libsql";
type Table = SQLiteTableWithColumns<any>;
/**
 * @description the zod schema that this function produces expects a query string parsed with (URL)SearchParams
 * as it is done with hono and then reparses with qs instead since hono doesn't parse nested query strings
 * if you don't need reparsing or just expect the original schema remove the z.preprocess bit
 * @param table the drizzle sqlite table
 * @returns a zod schema that receives
 */
export declare function generateFPSSchemaForTable(table: Table): z.ZodEffects<z.ZodEffects<z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    pageSize: z.ZodDefault<z.ZodNumber>;
    sort: z.ZodDefault<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<[string, ...string[]]>;
        order: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        order: "asc" | "desc";
        field: string;
    }, {
        field: string;
        order?: "asc" | "desc" | undefined;
    }>, "many">>;
    filter: z.ZodOptional<z.ZodRecord<z.ZodEnum<[string, ...string[]]>, z.ZodObject<{
        eq: z.ZodOptional<z.ZodString>;
        ne: z.ZodOptional<z.ZodString>;
        lt: z.ZodOptional<z.ZodString>;
        lte: z.ZodOptional<z.ZodString>;
        gt: z.ZodOptional<z.ZodString>;
        gte: z.ZodOptional<z.ZodString>;
        like: z.ZodOptional<z.ZodString>;
        in: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        nin: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        is: z.ZodOptional<z.ZodEnum<["null", "notnull"]>>;
    }, "strip", z.ZodTypeAny, {
        in: string[];
        nin: string[];
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        is?: "null" | "notnull" | undefined;
    }, {
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        in?: string[] | undefined;
        nin?: string[] | undefined;
        is?: "null" | "notnull" | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    sort: {
        order: "asc" | "desc";
        field: string;
    }[];
    page: number;
    pageSize: number;
    filter?: Record<string, {
        in: string[];
        nin: string[];
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        is?: "null" | "notnull" | undefined;
    }> | undefined;
}, {
    sort?: {
        field: string;
        order?: "asc" | "desc" | undefined;
    }[] | undefined;
    filter?: Record<string, {
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        in?: string[] | undefined;
        nin?: string[] | undefined;
        is?: "null" | "notnull" | undefined;
    }> | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>, {
    sort: {
        order: "asc" | "desc";
        field: string;
    }[];
    page: number;
    pageSize: number;
    filter?: Record<string, {
        in: string[];
        nin: string[];
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        is?: "null" | "notnull" | undefined;
    }> | undefined;
}, {
    sort?: {
        field: string;
        order?: "asc" | "desc" | undefined;
    }[] | undefined;
    filter?: Record<string, {
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        in?: string[] | undefined;
        nin?: string[] | undefined;
        is?: "null" | "notnull" | undefined;
    }> | undefined;
    page?: number | undefined;
    pageSize?: number | undefined;
}>, {
    sort: {
        order: "asc" | "desc";
        field: string;
    }[];
    page: number;
    pageSize: number;
    filter?: Record<string, {
        in: string[];
        nin: string[];
        eq?: string | undefined;
        ne?: string | undefined;
        lt?: string | undefined;
        lte?: string | undefined;
        gt?: string | undefined;
        gte?: string | undefined;
        like?: string | undefined;
        is?: "null" | "notnull" | undefined;
    }> | undefined;
}, unknown>;
export type AdvancedQuerySchema = z.infer<ReturnType<typeof generateFPSSchemaForTable>>;
/**
 *
 * @param table the drizzle sqlite table that we want to apply filtering pagination and sorting on.
 * @param fps the filtering pagination and sorting input
 * @param allowedColumns only these columns will be be fetched if provided, otherwise all columns if not provided
 * @returns data rows and total count(*) of this query
 */
export declare function advancedQuery<T extends Table, U extends T["_"]["columns"] | Omit<T["_"]["columns"], keyof T["_"]["columns"]>>(db: LibSQLDatabase<typeof tenantTSchema>, table: T, fps: AdvancedQuerySchema, allowedColumns?: U): Promise<{
    data: import("drizzle-orm/query-builders/select.types").SelectResult<NonNullable<U> extends infer T_1 ? T_1 extends NonNullable<U> ? T_1 extends undefined ? import("drizzle-orm/query-builders/select.types").GetSelectTableSelection<T> : T_1 : never : never, NonNullable<U> extends infer T_2 ? T_2 extends NonNullable<U> ? T_2 extends undefined ? "single" : "partial" : never : never, import("drizzle-orm/query-builders/select.types").GetSelectTableName<T> extends infer T_3 ? T_3 extends import("drizzle-orm/query-builders/select.types").GetSelectTableName<T> ? T_3 extends string ? Record<T_3, "not-null"> : {} : never : never>[] | ({ [Key in keyof import("drizzle-orm/query-builders/select.types").GetSelectTableSelection<T> & string]: import("drizzle-orm/query-builders/select.types").SelectResultField<import("drizzle-orm/query-builders/select.types").GetSelectTableSelection<T>[Key], true>; } extends infer T_4 ? { [K in keyof T_4]: { [Key in keyof import("drizzle-orm/query-builders/select.types").GetSelectTableSelection<T> & string]: import("drizzle-orm/query-builders/select.types").SelectResultField<import("drizzle-orm/query-builders/select.types").GetSelectTableSelection<T>[Key], true>; }[K]; } : never)[];
    totalCount: number;
}>;
export {};
