import { z } from "zod";
import { newRealEstateSchema } from "../../schemas";

export type newRealEstate = z.infer<typeof newRealEstateSchema>