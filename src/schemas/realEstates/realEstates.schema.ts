import { z } from "zod";

export const realEstateSchema = z.object({
    id: z.number().positive(),
    sold: z.boolean(),
    value: z.union([z.number(), z.string()]),
    size: z.number().positive(),
    createdAt: z.string(), 
    updatedAt: z.string()
})

export const newRealEstateSchema = realEstateSchema.omit({ id: true, createdAt: true, updatedAt: true})