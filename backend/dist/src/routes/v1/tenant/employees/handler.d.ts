import { OpenAPIHono } from "@hono/zod-openapi";
import type { Variables } from "../../../../lib/types/context-variables";
export declare const employeesGroup: OpenAPIHono<{
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
} & {
    "/:id": {
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
