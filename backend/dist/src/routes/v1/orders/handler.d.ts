import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../lib/types/context-variables";
export declare const ordersGroup: OpenAPIHono<{
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
} & {
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
                        code: string;
                        path: (string | number)[];
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
                json: {
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
                };
            };
            output: {
                orderId: number;
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
                [x: string]: any;
                orderId?: undefined;
                customerId?: undefined;
                employeeId?: undefined;
                orderDate?: undefined;
                requiredDate?: undefined;
                shippedDate?: undefined;
                shipVia?: undefined;
                freight?: undefined;
                shipName?: undefined;
                shipAddress?: undefined;
                shipCity?: undefined;
                shipRegion?: undefined;
                shipPostalCode?: undefined;
                shipCountry?: undefined;
                customer?: undefined;
                employee?: undefined;
                orderDetails?: undefined;
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
                    id: string;
                };
            } & {
                json: {
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
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
}, "/">;
