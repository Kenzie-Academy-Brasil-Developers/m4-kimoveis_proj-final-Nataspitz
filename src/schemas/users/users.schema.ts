import { z } from "zod"

export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

export const createUserSchema = userSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
export const responseUserSchema = userSchema.omit({ password: true})
export const userLoginSchema = userSchema.pick({ email: true, password: true})
export const userReadSchema = responseUserSchema.array()
export const updateUserSchema = createUserSchema.partial()