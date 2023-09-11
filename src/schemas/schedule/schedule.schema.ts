import { z } from "zod";

export const scheduleSchema = z.object({
    id: z.number().positive(),
    date: z.date().or(z.string()),
    hour: z.string(),
    realEstateId: z.number().positive().int(),
    userId: z.number().positive(),
})

export const newScheduleSchema = z.object({
    realEstateId: z.number().positive(),
    date: z.string(),
    hour: z.string(),
})
