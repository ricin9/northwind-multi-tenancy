export declare const customerCustomerDemoRelations: import("drizzle-orm/relations").Relations<"CustomerCustomerDemo", {
    customerDemographic: import("drizzle-orm/relations").One<"CustomerDemographics", true>;
    customer: import("drizzle-orm/relations").One<"Customers", true>;
}>;
export declare const customerDemographicsRelations: import("drizzle-orm/relations").Relations<"CustomerDemographics", {
    customerCustomerDemos: import("drizzle-orm/relations").Many<"CustomerCustomerDemo">;
}>;
export declare const customersRelations: import("drizzle-orm/relations").Relations<"Customers", {
    customerCustomerDemos: import("drizzle-orm/relations").Many<"CustomerCustomerDemo">;
    orders: import("drizzle-orm/relations").Many<"Orders">;
}>;
export declare const employeesRelations: import("drizzle-orm/relations").Relations<"Employees", {
    employee: import("drizzle-orm/relations").One<"Employees", false>;
    employees: import("drizzle-orm/relations").Many<"Employees">;
    employeeTerritories: import("drizzle-orm/relations").Many<"EmployeeTerritories">;
    orders: import("drizzle-orm/relations").Many<"Orders">;
}>;
export declare const employeeTerritoriesRelations: import("drizzle-orm/relations").Relations<"EmployeeTerritories", {
    territory: import("drizzle-orm/relations").One<"Territories", true>;
    employee: import("drizzle-orm/relations").One<"Employees", true>;
}>;
export declare const territoriesRelations: import("drizzle-orm/relations").Relations<"Territories", {
    employeeTerritories: import("drizzle-orm/relations").Many<"EmployeeTerritories">;
    region: import("drizzle-orm/relations").One<"Regions", true>;
}>;
export declare const orderDetailsRelations: import("drizzle-orm/relations").Relations<"Order Details", {
    product: import("drizzle-orm/relations").One<"Products", true>;
    order: import("drizzle-orm/relations").One<"Orders", true>;
}>;
export declare const productsRelations: import("drizzle-orm/relations").Relations<"Products", {
    orderDetails: import("drizzle-orm/relations").Many<"Order Details">;
    supplier: import("drizzle-orm/relations").One<"Suppliers", false>;
    category: import("drizzle-orm/relations").One<"Categories", false>;
}>;
export declare const ordersRelations: import("drizzle-orm/relations").Relations<"Orders", {
    orderDetails: import("drizzle-orm/relations").Many<"Order Details">;
    shipper: import("drizzle-orm/relations").One<"Shippers", false>;
    customer: import("drizzle-orm/relations").One<"Customers", false>;
    employee: import("drizzle-orm/relations").One<"Employees", false>;
}>;
export declare const shippersRelations: import("drizzle-orm/relations").Relations<"Shippers", {
    orders: import("drizzle-orm/relations").Many<"Orders">;
}>;
export declare const suppliersRelations: import("drizzle-orm/relations").Relations<"Suppliers", {
    products: import("drizzle-orm/relations").Many<"Products">;
}>;
export declare const categoriesRelations: import("drizzle-orm/relations").Relations<"Categories", {
    products: import("drizzle-orm/relations").Many<"Products">;
}>;
export declare const regionsRelations: import("drizzle-orm/relations").Relations<"Regions", {
    territories: import("drizzle-orm/relations").Many<"Territories">;
}>;
