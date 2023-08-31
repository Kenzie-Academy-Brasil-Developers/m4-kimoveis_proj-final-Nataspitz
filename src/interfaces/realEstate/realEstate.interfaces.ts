import { z } from "zod";
import { newRealEstateSchema, realEstateSchema } from "../../schemas";

export type realEstatesBody = z.infer<typeof newRealEstateSchema>
export type realEstatesReturn = z.infer<typeof realEstateSchema>
export type newRealEstate = z.infer<typeof newRealEstateSchema>