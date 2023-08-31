import { z } from "zod";
import { addressSchema, newAddressSchema } from "./../address/address.schema";
import { categorySchema } from "../category/category.schema";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean().default(false),
    value: z.string().or(z.number().positive()),
    size: z.number().positive(),
    createdAt: z.string().or(z.date()), 
    updatedAt: z.string().or(z.date()),
    address: addressSchema,
    category: categorySchema
})

export const newRealEstateSchema = z.object({
    value: z.string().or(z.number().positive()),
    size: z.number().positive(),
    categoryId: z.number().positive(),
    address: newAddressSchema
})


// export const newRealEstateSchema = realEstateSchema.omit(
//     { id: true, createdAt: true, updatedAt: true, addressId: true, category: true}).extend({
//         address: newAddressSchema
//     })

// {
//     "valeu": 130000,
//     "size": 350,
//     "address": {
//         "street": "rua 1",
//         "zipCode": "19000000",
//         "number": 14,
//         "city": "Sao Paulo",
//         "state": "SP",
//     },
//     "categoryId": 2
// }

// {
//     "valeu": 130000,
//     "size": 350,
//     "address": {
//         "street": "rua 1",
//         "zipCode": "19000000",
//         "number": 14,
//         "city": "Sao Paulo",
//         "state": "SP",
//         "id": 1
//     },
//     "category": {
//         "id": 3,
//         "name": "Apartamento"
//     },
//     "id": 2,
//     "sold": false,
//     "createdAt": "2023-08-31",
//     "updateedAt": "2023-08-31"
// }


