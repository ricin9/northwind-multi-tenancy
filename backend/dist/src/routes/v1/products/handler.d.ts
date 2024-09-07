import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../lib/types/context-variables";
export declare const productsGroup: OpenAPIHono<{
    Variables: Variables;
}, {
    "/": {
        $get: {
            input: {
                query: {};
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 200;
        } | {
            input: {
                query: {};
            };
            output: {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        path: (string | number)[];
                        code: string;
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 400;
        };
    };
} & {
    "/": {
        $post: {
            input: {
                json: {
                    productName: string;
                    unitPrice: string;
                    categoryId?: number | null | undefined;
                    supplierId?: number | null | undefined;
                    quantityPerUnit?: string | null | undefined;
                    unitsInStock?: number | null | undefined;
                    unitsOnOrder?: number | null | undefined;
                    reorderLevel?: number | null | undefined;
                    discontinued?: string | undefined;
                };
            };
            output: {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        path: (string | number)[];
                        code: string;
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                json: {
                    productName: string;
                    unitPrice: string;
                    categoryId?: number | null | undefined;
                    supplierId?: number | null | undefined;
                    quantityPerUnit?: string | null | undefined;
                    unitsInStock?: number | null | undefined;
                    unitsOnOrder?: number | null | undefined;
                    reorderLevel?: number | null | undefined;
                    discontinued?: string | undefined;
                };
            };
            output: {
                productId: number;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
} & {
    "/:id": {
        $get: {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        path: (string | number)[];
                        code: string;
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            };
            output: {
                categoryId?: number | null | undefined;
                productId?: number | undefined;
                productName?: string | undefined;
                supplierId?: number | null | undefined;
                quantityPerUnit?: string | null | undefined;
                unitPrice?: string | undefined;
                unitsInStock?: number | null | undefined;
                unitsOnOrder?: number | null | undefined;
                reorderLevel?: number | null | undefined;
                discontinued?: string | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/:id": {
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    categoryId?: number | null | undefined;
                    productName?: string | undefined;
                    supplierId?: number | null | undefined;
                    quantityPerUnit?: string | null | undefined;
                    unitPrice?: string | undefined;
                    unitsInStock?: number | null | undefined;
                    unitsOnOrder?: number | null | undefined;
                    reorderLevel?: number | null | undefined;
                    discontinued?: string | undefined;
                };
            };
            output: {
                success?: false | undefined;
                error?: {
                    name: string;
                    issues: {
                        path: (string | number)[];
                        code: string;
                        message: string;
                        received: string;
                    }[];
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    categoryId?: number | null | undefined;
                    productName?: string | undefined;
                    supplierId?: number | null | undefined;
                    quantityPerUnit?: string | null | undefined;
                    unitPrice?: string | undefined;
                    unitsInStock?: number | null | undefined;
                    unitsOnOrder?: number | null | undefined;
                    reorderLevel?: number | null | undefined;
                    discontinued?: string | undefined;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    categoryId?: number | null | undefined;
                    productName?: string | undefined;
                    supplierId?: number | null | undefined;
                    quantityPerUnit?: string | null | undefined;
                    unitPrice?: string | undefined;
                    unitsInStock?: number | null | undefined;
                    unitsOnOrder?: number | null | undefined;
                    reorderLevel?: number | null | undefined;
                    discontinued?: string | undefined;
                };
            };
            output: {
                categoryId?: number | null | undefined;
                productId?: number | undefined;
                productName?: string | undefined;
                supplierId?: number | null | undefined;
                quantityPerUnit?: string | null | undefined;
                unitPrice?: string | undefined;
                unitsInStock?: number | null | undefined;
                unitsOnOrder?: number | null | undefined;
                reorderLevel?: number | null | undefined;
                discontinued?: string | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
}, "/">;
