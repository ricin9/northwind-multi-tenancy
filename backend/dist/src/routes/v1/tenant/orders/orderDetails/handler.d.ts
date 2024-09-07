import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../../../lib/types/context-variables";
export declare const orderDetailsGroup: OpenAPIHono<{
    Variables: Variables;
}, {
    "/:orderId/details": {
        $get: {
            input: {
                param: {
                    orderId: string;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    orderId: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    orderId: string;
                };
            };
            output: {
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
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/:orderId/details/:productId": {
        $get: {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {
                orderId?: number | undefined;
                productId?: number | undefined;
                unitPrice?: string | undefined;
                quantity?: number | undefined;
                discount?: number | undefined;
                product?: {
                    productId?: number | undefined;
                    productName?: string | undefined;
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/:orderId/details/:productId": {
        $put: {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            } & {
                json: {
                    productId: number;
                    unitPrice: string;
                    quantity?: number | undefined;
                    discount?: number | undefined;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            } & {
                json: {
                    productId: number;
                    unitPrice: string;
                    quantity?: number | undefined;
                    discount?: number | undefined;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            } & {
                json: {
                    productId: number;
                    unitPrice: string;
                    quantity?: number | undefined;
                    discount?: number | undefined;
                };
            };
            output: {
                orderId?: number | undefined;
                productId?: number | undefined;
                unitPrice?: string | undefined;
                quantity?: number | undefined;
                discount?: number | undefined;
                product?: {
                    productId?: number | undefined;
                    productName?: string | undefined;
                } | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/:orderId/details/:productId": {
        $delete: {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 400;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 404;
        } | {
            input: {
                param: {
                    orderId: string;
                    productId: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 204;
        };
    };
}, "/">;
