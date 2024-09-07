import { z } from "@hono/zod-openapi";
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
                        customerId: z.ZodString;
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
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        customerId: string;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
                    }, {
                        customerId: string;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
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
                        customerId: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        customerId: string;
                    }, {
                        customerId: string;
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
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
                    schema: z.ZodObject<{
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
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        customerId?: string | undefined;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
                    }, {
                        customerId?: string | undefined;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
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
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        companyName: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        contactName: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        contactTitle: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        address: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        city: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        region: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        postalCode: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        country: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        phone: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                        fax: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
                    }, {
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
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
                    }, z.UnknownKeysParam, z.ZodTypeAny, {
                        customerId?: string | undefined;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
                    }, {
                        customerId?: string | undefined;
                        companyName?: string | null | undefined;
                        contactName?: string | null | undefined;
                        contactTitle?: string | null | undefined;
                        address?: string | null | undefined;
                        city?: string | null | undefined;
                        region?: string | null | undefined;
                        postalCode?: string | null | undefined;
                        country?: string | null | undefined;
                        phone?: string | null | undefined;
                        fax?: string | null | undefined;
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
