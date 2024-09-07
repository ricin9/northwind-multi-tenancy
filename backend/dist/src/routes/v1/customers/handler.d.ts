import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../lib/types/context-variables";
export declare const customersGroup: OpenAPIHono<{
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
    "/:id": {
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
}, "/">;
