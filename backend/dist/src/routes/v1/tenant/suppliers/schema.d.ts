export declare const insertSupplierSchema: import("zod").ZodObject<Omit<{
    companyName: import("zod").ZodString;
    contactName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    contactTitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    city: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    region: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    postalCode: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    country: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    phone: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    fax: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    supplierId: import("zod").ZodOptional<import("zod").ZodNumber>;
    homePage: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
}, "supplierId">, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
}, {
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
}>;
export declare const updateSupplierSchema: import("zod").ZodObject<{
    companyName: import("zod").ZodOptional<import("zod").ZodString>;
    contactName: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    contactTitle: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    address: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    city: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    region: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    postalCode: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    country: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    phone: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    fax: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
    homePage: import("zod").ZodOptional<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
}, {
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
}>;
export declare const supplierSchema: import("zod").ZodObject<{
    supplierId: import("zod").ZodOptional<import("zod").ZodNumber>;
    companyName: import("zod").ZodOptional<import("zod").ZodString>;
    contactName: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    contactTitle: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    address: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    city: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    region: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    postalCode: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    country: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    phone: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    fax: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
    homePage: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
}, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
}, {
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
}>;
export declare const listSupplierSchema: import("zod").ZodObject<{
    metadata: import("zod").ZodObject<{
        page: import("zod").ZodNumber;
        pageSize: import("zod").ZodNumber;
        totalCount: import("zod").ZodNumber;
        totalPages: import("zod").ZodNumber;
        links: import("zod").ZodObject<{
            self: import("zod").ZodString;
            first: import("zod").ZodString;
            last: import("zod").ZodString;
            next: import("zod").ZodNullable<import("zod").ZodString>;
            prev: import("zod").ZodNullable<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
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
    }, "strip", import("zod").ZodTypeAny, {
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
    data: import("zod").ZodArray<import("zod").ZodObject<{
        [x: string]: import("zod").ZodOptional<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | any | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate | import("zod").ZodNullable<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | import("zod").ZodArray<import("zod").ZodString | import("zod").ZodNumber | import("zod").ZodAny | import("zod").ZodBoolean | import("zod").ZodType<string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null, import("zod").ZodTypeDef, string | number | boolean | {
            [key: string]: string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null;
        } | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | (string | number | boolean | any | any | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null)[] | null> | import("zod").ZodEnum<any> | any | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate, "many"> | import("zod").ZodBigInt | import("zod").ZodDate>>;
    }, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">;
}, "strip", import("zod").ZodTypeAny, {
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
export declare const listSupplierQuerySearchSchema: import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodObject<{
    page: import("zod").ZodDefault<import("zod").ZodNumber>;
    pageSize: import("zod").ZodDefault<import("zod").ZodNumber>;
    sort: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
        field: import("zod").ZodEnum<[string, ...string[]]>;
        order: import("zod").ZodDefault<import("zod").ZodEnum<["asc", "desc"]>>;
    }, "strip", import("zod").ZodTypeAny, {
        order: "asc" | "desc";
        field: string;
    }, {
        field: string;
        order?: "asc" | "desc" | undefined;
    }>, "many">>;
    filter: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodEnum<[string, ...string[]]>, import("zod").ZodObject<{
        eq: import("zod").ZodOptional<import("zod").ZodString>;
        ne: import("zod").ZodOptional<import("zod").ZodString>;
        lt: import("zod").ZodOptional<import("zod").ZodString>;
        lte: import("zod").ZodOptional<import("zod").ZodString>;
        gt: import("zod").ZodOptional<import("zod").ZodString>;
        gte: import("zod").ZodOptional<import("zod").ZodString>;
        like: import("zod").ZodOptional<import("zod").ZodString>;
        in: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        nin: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodString, "many">>;
        is: import("zod").ZodOptional<import("zod").ZodEnum<["null", "notnull"]>>;
    }, "strip", import("zod").ZodTypeAny, {
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
}, "strip", import("zod").ZodTypeAny, {
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
