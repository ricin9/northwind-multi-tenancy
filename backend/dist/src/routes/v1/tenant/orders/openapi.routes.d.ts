import { z } from "@hono/zod-openapi";
export declare const tags: string[];
export declare const list: {
    method: "get";
    path: "/";
    tags: string[];
    summary: string;
    description: string;
    request: {
        query: z.ZodEffects<z.ZodEffects<z.ZodObject<{
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
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        metadata: z.ZodObject<{
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
                        data: z.ZodArray<z.ZodObject<{
                            [x: string]: z.ZodOptional<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | any | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate | z.ZodNullable<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | z.ZodArray<z.ZodString | z.ZodNumber | z.ZodAny | z.ZodBoolean | z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | z.ZodEnum<any> | any | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate, "many"> | z.ZodBigInt | z.ZodDate>>;
                        }, z.UnknownKeysParam, z.ZodTypeAny, {
                            [x: string]: any;
                        }, {
                            [x: string]: any;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        data: {
                            [x: string]: any;
                        }[];
                        metadata: {
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
                        };
                    }, {
                        data: {
                            [x: string]: any;
                        }[];
                        metadata: {
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
                        };
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodOptional<z.ZodObject<{
                        success: z.ZodOptional<z.ZodLiteral<false>>;
                        error: z.ZodOptional<z.ZodObject<{
                            issues: z.ZodArray<z.ZodObject<{
                                received: z.ZodString;
                                code: z.ZodEnum<[string, ...string[]]>;
                                path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
                                message: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }>, "many">;
                            name: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }>>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const create: {
    method: "post";
    path: "/";
    tags: string[];
    summary: string;
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        order: z.ZodObject<Omit<{
                            customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            employeeId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                            orderId: z.ZodOptional<z.ZodNumber>;
                            orderDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            requiredDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shippedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipVia: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                            freight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipCity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipPostalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            shipCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        }, "orderId">, z.UnknownKeysParam, z.ZodTypeAny, {
                            customerId?: string | null | undefined;
                            employeeId?: number | null | undefined;
                            orderDate?: string | null | undefined;
                            requiredDate?: string | null | undefined;
                            shippedDate?: string | null | undefined;
                            shipVia?: number | null | undefined;
                            freight?: string | null | undefined;
                            shipName?: string | null | undefined;
                            shipAddress?: string | null | undefined;
                            shipCity?: string | null | undefined;
                            shipRegion?: string | null | undefined;
                            shipPostalCode?: string | null | undefined;
                            shipCountry?: string | null | undefined;
                        }, {
                            customerId?: string | null | undefined;
                            employeeId?: number | null | undefined;
                            orderDate?: string | null | undefined;
                            requiredDate?: string | null | undefined;
                            shippedDate?: string | null | undefined;
                            shipVia?: number | null | undefined;
                            freight?: string | null | undefined;
                            shipName?: string | null | undefined;
                            shipAddress?: string | null | undefined;
                            shipCity?: string | null | undefined;
                            shipRegion?: string | null | undefined;
                            shipPostalCode?: string | null | undefined;
                            shipCountry?: string | null | undefined;
                        }>;
                        details: z.ZodEffects<z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
                            orderId: z.ZodNumber;
                            productId: z.ZodNumber;
                            unitPrice: z.ZodString;
                            quantity: z.ZodOptional<z.ZodNumber>;
                            discount: z.ZodOptional<z.ZodNumber>;
                        }, {
                            unitPrice: z.ZodEffects<z.ZodString, string, string>;
                            quantity: z.ZodDefault<z.ZodNumber>;
                            discount: z.ZodDefault<z.ZodNumber>;
                        }>, "orderId">, z.UnknownKeysParam, z.ZodTypeAny, {
                            productId: number;
                            unitPrice: string;
                            quantity: number;
                            discount: number;
                        }, {
                            productId: number;
                            unitPrice: string;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                        }>, "many">, {
                            productId: number;
                            unitPrice: string;
                            quantity: number;
                            discount: number;
                        }[], {
                            productId: number;
                            unitPrice: string;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                        }[]>;
                    }, "strip", z.ZodTypeAny, {
                        order: {
                            customerId?: string | null | undefined;
                            employeeId?: number | null | undefined;
                            orderDate?: string | null | undefined;
                            requiredDate?: string | null | undefined;
                            shippedDate?: string | null | undefined;
                            shipVia?: number | null | undefined;
                            freight?: string | null | undefined;
                            shipName?: string | null | undefined;
                            shipAddress?: string | null | undefined;
                            shipCity?: string | null | undefined;
                            shipRegion?: string | null | undefined;
                            shipPostalCode?: string | null | undefined;
                            shipCountry?: string | null | undefined;
                        };
                        details: {
                            productId: number;
                            unitPrice: string;
                            quantity: number;
                            discount: number;
                        }[];
                    }, {
                        order: {
                            customerId?: string | null | undefined;
                            employeeId?: number | null | undefined;
                            orderDate?: string | null | undefined;
                            requiredDate?: string | null | undefined;
                            shippedDate?: string | null | undefined;
                            shipVia?: number | null | undefined;
                            freight?: string | null | undefined;
                            shipName?: string | null | undefined;
                            shipAddress?: string | null | undefined;
                            shipCity?: string | null | undefined;
                            shipRegion?: string | null | undefined;
                            shipPostalCode?: string | null | undefined;
                            shipCountry?: string | null | undefined;
                        };
                        details: {
                            productId: number;
                            unitPrice: string;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                        }[];
                    }>;
                };
            };
        };
    };
    responses: {
        201: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        orderId: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        orderId: number;
                    }, {
                        orderId: number;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodOptional<z.ZodObject<{
                        success: z.ZodOptional<z.ZodLiteral<false>>;
                        error: z.ZodOptional<z.ZodObject<{
                            issues: z.ZodArray<z.ZodObject<{
                                received: z.ZodString;
                                code: z.ZodEnum<[string, ...string[]]>;
                                path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
                                message: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }>, "many">;
                            name: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }>>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const get: {
    method: "get";
    path: "/{id}";
    tags: string[];
    summary: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodPipeline<z.ZodString, z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<z.objectUtil.extendShape<{
                        orderId: z.ZodOptional<z.ZodNumber>;
                        customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        employeeId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        orderDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        requiredDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shippedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipVia: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        freight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipCity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipPostalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, {
                        customer: z.ZodObject<Pick<{
                            customerId: z.ZodOptional<z.ZodString>;
                            companyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            contactName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            contactTitle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            fax: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        }, "customerId" | "companyName">, z.UnknownKeysParam, z.ZodTypeAny, {
                            customerId?: string | undefined;
                            companyName?: string | null | undefined;
                        }, {
                            customerId?: string | undefined;
                            companyName?: string | null | undefined;
                        }>;
                        employee: z.ZodObject<Pick<{
                            employeeId: z.ZodOptional<z.ZodNumber>;
                            lastName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            firstName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            titleOfCourtesy: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            birthDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            hireDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            city: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            region: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            postalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            country: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            homePhone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            extension: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            photo: z.ZodOptional<z.ZodNullable<z.ZodType<string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, z.ZodTypeDef, string | number | boolean | {
                                [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                            } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null>>>;
                            notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                            reportsTo: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                            photoPath: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        }, "employeeId" | "lastName" | "firstName">, z.UnknownKeysParam, z.ZodTypeAny, {
                            employeeId?: number | undefined;
                            lastName?: string | null | undefined;
                            firstName?: string | null | undefined;
                        }, {
                            employeeId?: number | undefined;
                            lastName?: string | null | undefined;
                            firstName?: string | null | undefined;
                        }>;
                        orderDetails: z.ZodArray<z.ZodObject<{
                            orderId: z.ZodOptional<z.ZodNumber>;
                            productId: z.ZodOptional<z.ZodNumber>;
                            unitPrice: z.ZodOptional<z.ZodString>;
                            quantity: z.ZodOptional<z.ZodNumber>;
                            discount: z.ZodOptional<z.ZodNumber>;
                            product: z.ZodOptional<z.ZodObject<Pick<{
                                productId: z.ZodOptional<z.ZodNumber>;
                                productName: z.ZodOptional<z.ZodString>;
                                supplierId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                                categoryId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                                quantityPerUnit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                                unitPrice: z.ZodOptional<z.ZodString>;
                                unitsInStock: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                                unitsOnOrder: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                                reorderLevel: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                                discontinued: z.ZodOptional<z.ZodString>;
                            }, "productId" | "productName">, z.UnknownKeysParam, z.ZodTypeAny, {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            }, {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            }>>;
                        }, z.UnknownKeysParam, z.ZodTypeAny, {
                            orderId?: number | undefined;
                            productId?: number | undefined;
                            unitPrice?: string | undefined;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                            product?: {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            } | undefined;
                        }, {
                            orderId?: number | undefined;
                            productId?: number | undefined;
                            unitPrice?: string | undefined;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                            product?: {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            } | undefined;
                        }>, "many">;
                    }>, z.UnknownKeysParam, z.ZodTypeAny, {
                        customer: {
                            customerId?: string | undefined;
                            companyName?: string | null | undefined;
                        };
                        employee: {
                            employeeId?: number | undefined;
                            lastName?: string | null | undefined;
                            firstName?: string | null | undefined;
                        };
                        orderDetails: {
                            orderId?: number | undefined;
                            productId?: number | undefined;
                            unitPrice?: string | undefined;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                            product?: {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            } | undefined;
                        }[];
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderId?: number | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }, {
                        customer: {
                            customerId?: string | undefined;
                            companyName?: string | null | undefined;
                        };
                        employee: {
                            employeeId?: number | undefined;
                            lastName?: string | null | undefined;
                            firstName?: string | null | undefined;
                        };
                        orderDetails: {
                            orderId?: number | undefined;
                            productId?: number | undefined;
                            unitPrice?: string | undefined;
                            quantity?: number | undefined;
                            discount?: number | undefined;
                            product?: {
                                productId?: number | undefined;
                                productName?: string | undefined;
                            } | undefined;
                        }[];
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderId?: number | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodOptional<z.ZodObject<{
                        success: z.ZodOptional<z.ZodLiteral<false>>;
                        error: z.ZodOptional<z.ZodObject<{
                            issues: z.ZodArray<z.ZodObject<{
                                received: z.ZodString;
                                code: z.ZodEnum<[string, ...string[]]>;
                                path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
                                message: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }>, "many">;
                            name: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }>>;
                };
            };
        };
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const update: {
    method: "patch";
    path: "/{id}";
    tags: string[];
    summary: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodPipeline<z.ZodString, z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        customerId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        employeeId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
                        orderDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        requiredDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shippedDate: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipVia: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
                        freight: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipName: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipAddress: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipCity: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipRegion: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipPostalCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        shipCountry: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }, {
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }>;
                };
            };
        };
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        orderId: z.ZodOptional<z.ZodNumber>;
                        customerId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        employeeId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        orderDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        requiredDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shippedDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipVia: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
                        freight: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipAddress: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipCity: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipRegion: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipPostalCode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                        shipCountry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderId?: number | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }, {
                        customerId?: string | null | undefined;
                        employeeId?: number | null | undefined;
                        orderId?: number | undefined;
                        orderDate?: string | null | undefined;
                        requiredDate?: string | null | undefined;
                        shippedDate?: string | null | undefined;
                        shipVia?: number | null | undefined;
                        freight?: string | null | undefined;
                        shipName?: string | null | undefined;
                        shipAddress?: string | null | undefined;
                        shipCity?: string | null | undefined;
                        shipRegion?: string | null | undefined;
                        shipPostalCode?: string | null | undefined;
                        shipCountry?: string | null | undefined;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodOptional<z.ZodObject<{
                        success: z.ZodOptional<z.ZodLiteral<false>>;
                        error: z.ZodOptional<z.ZodObject<{
                            issues: z.ZodArray<z.ZodObject<{
                                received: z.ZodString;
                                code: z.ZodEnum<[string, ...string[]]>;
                                path: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodNumber]>, "many">;
                                message: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }, {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }>, "many">;
                            name: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }, {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        }>>;
                    }, "strip", z.ZodTypeAny, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }, {
                        success?: false | undefined;
                        error?: {
                            name: string;
                            issues: {
                                code: string;
                                path: (string | number)[];
                                message: string;
                                received: string;
                            }[];
                        } | undefined;
                    }>>;
                };
            };
        };
        404: {
            description: string;
        };
    };
} & {
    getRoutingPath(): "/:id";
};
