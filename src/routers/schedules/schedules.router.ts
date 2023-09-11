import { Router } from "express";
import { createScheduleController, listSchedulesController } from "../../controllers";
import { validateBody, verifyIdRealEstates, verifyIdRealEstatesBySchedules, verifyPermission, verifySchedulesExists, verifyToken } from "../../middlewares";
import { newScheduleSchema } from "../../schemas";

export const schedulesRoute: Router = Router()

schedulesRoute.post("/", verifyToken, validateBody(newScheduleSchema), verifyIdRealEstatesBySchedules, verifySchedulesExists, createScheduleController)
schedulesRoute.get("/realEstate/:id", verifyToken, verifyPermission, verifyIdRealEstates, listSchedulesController)