import { z } from "zod";
import { Schedule } from "../../entities";
import { newScheduleSchema } from "../../schemas";

export type newSchedule = z.infer<typeof newScheduleSchema>