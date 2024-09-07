import { z } from "@hono/zod-openapi";
export declare const insertOrderDetailSchema: z.ZodObject<Omit<z.objectUtil.extendShape<{
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
}>;
export declare const insertOrderDetailsSchema: z.ZodEffects<z.ZodArray<z.ZodObject<Omit<z.objectUtil.extendShape<{
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
export declare const updateOrderDetailSchema: z.ZodObject<{
    productId: z.ZodOptional<z.ZodNumber>;
    unitPrice: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    quantity: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    discount: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
}, z.UnknownKeysParam, z.ZodTypeAny, {
    productId?: number | undefined;
    unitPrice?: string | undefined;
    quantity?: number | undefined;
    discount?: number | undefined;
}, {
    productId?: number | undefined;
    unitPrice?: string | undefined;
    quantity?: number | undefined;
    discount?: number | undefined;
}>;
export declare const orderDetailSchema: z.ZodObject<{
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
}>;
export declare const orderIdParamSchema: z.ZodObject<{
    orderId: z.ZodPipeline<z.ZodString, z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    orderId: number;
}, {
    orderId: string;
}>;
export declare const orderIdDetailIdParamSchema: z.ZodObject<z.objectUtil.extendShape<{
    orderId: z.ZodPipeline<z.ZodString, z.ZodNumber>;
}, {
    productId: z.ZodPipeline<z.ZodString, z.ZodNumber>;
}>, "strip", z.ZodTypeAny, {
    orderId: number;
    productId: number;
}, {
    orderId: string;
    productId: string;
}>;
