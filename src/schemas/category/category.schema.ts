import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
})

export const newCategorySchema = categorySchema.omit({ id: true })