import { z } from "zod";
import { newCategorySchema } from "../../schemas";

export type newCategory = z.infer<typeof newCategorySchema>