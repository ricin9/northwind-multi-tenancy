import { OpenAPIHono } from "@hono/zod-openapi";
import { employeesGroup } from "./tenant/employees/handler";
import { suppliersGroup } from "./tenant/suppliers/handler";
import { shippersGroup } from "./tenant/shippers/handler";
import { productsGroup } from "./tenant/products/handler";
import { customersGroup } from "./tenant/customers/handler";
import { ordersGroup } from "./tenant/orders/handler";
import { accountsGroup } from "./central/account/handler";
export const v1 = new OpenAPIHono().route("/employees", employeesGroup).route("/customers", customersGroup).route("/suppliers", suppliersGroup).route("/shippers", shippersGroup).route("/products", productsGroup).route("/orders", ordersGroup).route("/accounts", accountsGroup);
