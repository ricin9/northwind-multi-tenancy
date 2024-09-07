import type { Context } from "hono";
import { z } from "@hono/zod-openapi";
export declare const metadataSchema: z.ZodObject<{
    page: z.ZodNumber;
    pageSize: z.ZodNumber;
    totalCount: z.ZodNumber;
    totalPages: z.ZodNumber;
    links: z.ZodObject<{
        self: z.ZodString;
        first: z.ZodString;
        last: z.ZodString;
        next: z.ZodNullable<z.ZodString>;
        prev: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        self: string;
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
    }, {
        self: string;
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    links: {
        self: string;
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
    };
}, {
    page: number;
    pageSize: number;
    totalCount: number;
    totalPages: number;
    links: {
        self: string;
        first: string;
        last: string;
        next: string | null;
        prev: string | null;
    };
}>;
type PaginationMetadata = z.infer<typeof metadataSchema>;
export declare function generatePaginationMetadata(c: Context<any, any, {
    out: {
        query: {
            page: number;
            pageSize: number;
        };
    };
}>, totalCount: number): PaginationMetadata;
export {};
