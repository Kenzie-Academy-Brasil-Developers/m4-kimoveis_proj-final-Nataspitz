import { Router } from "express";
import { createNewRealEstateController, listAllRealEstatesController } from "../../controllers";
import { validateBody, verifyPermission, verifyToken } from "../../middlewares";
import { newRealEstateSchema } from "../../schemas";

export const estateRoute: Router = Router()

estateRoute.post("", verifyToken, verifyPermission, validateBody(newRealEstateSchema), createNewRealEstateController)
estateRoute.get("", listAllRealEstatesController)