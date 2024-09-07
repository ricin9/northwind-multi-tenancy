import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../lib/types/context-variables";
export declare const v1: OpenAPIHono<{
    Variables: Variables;
}, {
    "/accounts/login": {
        $post: {
            input: {
                json: {
                    username: string;
                    password: string;
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
                    username: string;
                    password: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 201;
        };
    };
    "/accounts/logout": {
        $post: {
            input: {};
            output: {};
            outputFormat: string;
            status: 201;
        };
    };
    "/accounts": {
        $post: {
            input: {
                json: {
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
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
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
                };
            };
            output: {};
            outputFormat: string;
            status: 409;
        } | {
            input: {
                json: {
                    companyName: string;
                    companySubdomain: string;
                    username: string;
                    password: string;
                };
            };
            output: {
                companyName: string;
                companyId: number;
                companySubdomain: string;
                userId: number;
                username: string;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
} & {
    "/orders/:orderId/details": {
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
    "/orders/:orderId/details/:productId": {
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
    "/orders": {
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
    "/orders/:id": {
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
            };
            outputFormat: "json" | "text";
            status: 200;
        };
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
} & {
    "/products": {
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
    "/products/:id": {
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
} & {
    "/shippers": {
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
        $post: {
            input: {
                json: {
                    companyName: string;
                    phone?: string | null | undefined;
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
                    companyName: string;
                    phone?: string | null | undefined;
                };
            };
            output: {
                shipperId: number;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
    "/shippers/:id": {
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
                companyName?: string | undefined;
                phone?: string | null | undefined;
                shipperId?: number | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    companyName?: string | undefined;
                    phone?: string | null | undefined;
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
                    companyName?: string | undefined;
                    phone?: string | null | undefined;
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
                    companyName?: string | undefined;
                    phone?: string | null | undefined;
                };
            };
            output: {
                companyName?: string | undefined;
                phone?: string | null | undefined;
                shipperId?: number | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/suppliers": {
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
        $post: {
            input: {
                json: {
                    companyName: string;
                    contactName?: string | null | undefined;
                    contactTitle?: string | null | undefined;
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    phone?: string | null | undefined;
                    fax?: string | null | undefined;
                    homePage?: string | null | undefined;
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
                    companyName: string;
                    contactName?: string | null | undefined;
                    contactTitle?: string | null | undefined;
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    phone?: string | null | undefined;
                    fax?: string | null | undefined;
                    homePage?: string | null | undefined;
                };
            };
            output: {
                supplierId: number;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
    "/suppliers/:id": {
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
                companyName?: string | undefined;
                contactName?: string | null | undefined;
                contactTitle?: string | null | undefined;
                address?: string | null | undefined;
                city?: string | null | undefined;
                region?: string | null | undefined;
                postalCode?: string | null | undefined;
                country?: string | null | undefined;
                phone?: string | null | undefined;
                fax?: string | null | undefined;
                supplierId?: number | undefined;
                homePage?: string | null | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    companyName?: string | undefined;
                    contactName?: string | null | undefined;
                    contactTitle?: string | null | undefined;
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    phone?: string | null | undefined;
                    fax?: string | null | undefined;
                    homePage?: string | null | undefined;
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
                    companyName?: string | undefined;
                    contactName?: string | null | undefined;
                    contactTitle?: string | null | undefined;
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    phone?: string | null | undefined;
                    fax?: string | null | undefined;
                    homePage?: string | null | undefined;
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
                    companyName?: string | undefined;
                    contactName?: string | null | undefined;
                    contactTitle?: string | null | undefined;
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    phone?: string | null | undefined;
                    fax?: string | null | undefined;
                    homePage?: string | null | undefined;
                };
            };
            output: {
                companyName?: string | undefined;
                contactName?: string | null | undefined;
                contactTitle?: string | null | undefined;
                address?: string | null | undefined;
                city?: string | null | undefined;
                region?: string | null | undefined;
                postalCode?: string | null | undefined;
                country?: string | null | undefined;
                phone?: string | null | undefined;
                fax?: string | null | undefined;
                supplierId?: number | undefined;
                homePage?: string | null | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/customers": {
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
        $post: {
            input: {
                json: {
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
                };
            };
            output: {
                customerId: string;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
    "/customers/:id": {
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
            };
            outputFormat: "json" | "text";
            status: 200;
        };
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
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
                };
            };
            output: {
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
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
} & {
    "/employees": {
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
        $post: {
            input: {
                json: {
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    lastName?: string | null | undefined;
                    firstName?: string | null | undefined;
                    title?: string | null | undefined;
                    titleOfCourtesy?: string | null | undefined;
                    birthDate?: string | null | undefined;
                    hireDate?: string | null | undefined;
                    homePhone?: string | null | undefined;
                    extension?: string | null | undefined;
                    photo?: (string | number | boolean | {
                        [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                    } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null) | undefined;
                    notes?: string | null | undefined;
                    reportsTo?: number | null | undefined;
                    photoPath?: string | null | undefined;
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
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    lastName?: string | null | undefined;
                    firstName?: string | null | undefined;
                    title?: string | null | undefined;
                    titleOfCourtesy?: string | null | undefined;
                    birthDate?: string | null | undefined;
                    hireDate?: string | null | undefined;
                    homePhone?: string | null | undefined;
                    extension?: string | null | undefined;
                    photo?: (string | number | boolean | {
                        [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                    } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null) | undefined;
                    notes?: string | null | undefined;
                    reportsTo?: number | null | undefined;
                    photoPath?: string | null | undefined;
                };
            };
            output: {
                employeeId: number;
            };
            outputFormat: "json" | "text";
            status: 201;
        };
    };
    "/employees/:id": {
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
                address?: string | null | undefined;
                city?: string | null | undefined;
                region?: string | null | undefined;
                postalCode?: string | null | undefined;
                country?: string | null | undefined;
                employeeId?: number | undefined;
                lastName?: string | null | undefined;
                firstName?: string | null | undefined;
                title?: string | null | undefined;
                titleOfCourtesy?: string | null | undefined;
                birthDate?: string | null | undefined;
                hireDate?: string | null | undefined;
                homePhone?: string | null | undefined;
                extension?: string | null | undefined;
                photo?: string | number | boolean | {
                    [x: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
                notes?: string | null | undefined;
                reportsTo?: number | null | undefined;
                photoPath?: string | null | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
        $patch: {
            input: {
                param: {
                    id: string;
                };
            } & {
                json: {
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    lastName?: string | null | undefined;
                    firstName?: string | null | undefined;
                    title?: string | null | undefined;
                    titleOfCourtesy?: string | null | undefined;
                    birthDate?: string | null | undefined;
                    hireDate?: string | null | undefined;
                    homePhone?: string | null | undefined;
                    extension?: string | null | undefined;
                    photo?: (string | number | boolean | {
                        [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                    } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null) | undefined;
                    notes?: string | null | undefined;
                    reportsTo?: number | null | undefined;
                    photoPath?: string | null | undefined;
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
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    lastName?: string | null | undefined;
                    firstName?: string | null | undefined;
                    title?: string | null | undefined;
                    titleOfCourtesy?: string | null | undefined;
                    birthDate?: string | null | undefined;
                    hireDate?: string | null | undefined;
                    homePhone?: string | null | undefined;
                    extension?: string | null | undefined;
                    photo?: (string | number | boolean | {
                        [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                    } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null) | undefined;
                    notes?: string | null | undefined;
                    reportsTo?: number | null | undefined;
                    photoPath?: string | null | undefined;
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
                    address?: string | null | undefined;
                    city?: string | null | undefined;
                    region?: string | null | undefined;
                    postalCode?: string | null | undefined;
                    country?: string | null | undefined;
                    lastName?: string | null | undefined;
                    firstName?: string | null | undefined;
                    title?: string | null | undefined;
                    titleOfCourtesy?: string | null | undefined;
                    birthDate?: string | null | undefined;
                    hireDate?: string | null | undefined;
                    homePhone?: string | null | undefined;
                    extension?: string | null | undefined;
                    photo?: (string | number | boolean | {
                        [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                    } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null) | undefined;
                    notes?: string | null | undefined;
                    reportsTo?: number | null | undefined;
                    photoPath?: string | null | undefined;
                };
            };
            output: {
                address?: string | null | undefined;
                city?: string | null | undefined;
                region?: string | null | undefined;
                postalCode?: string | null | undefined;
                country?: string | null | undefined;
                employeeId?: number | undefined;
                lastName?: string | null | undefined;
                firstName?: string | null | undefined;
                title?: string | null | undefined;
                titleOfCourtesy?: string | null | undefined;
                birthDate?: string | null | undefined;
                hireDate?: string | null | undefined;
                homePhone?: string | null | undefined;
                extension?: string | null | undefined;
                photo?: string | number | boolean | {
                    [x: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
                } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null | undefined;
                notes?: string | null | undefined;
                reportsTo?: number | null | undefined;
                photoPath?: string | null | undefined;
            };
            outputFormat: "json" | "text";
            status: 200;
        };
    };
}, "/">;
