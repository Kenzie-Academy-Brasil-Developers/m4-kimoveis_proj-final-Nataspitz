import { Router } from "express";
import { createNewRealEstateController, listAllRealEstatesController } from "../../controllers";
import { validateBody, verifyAddressExists, verifyPermission, verifyToken } from "../../middlewares";
import { newRealEstateSchema } from "../../schemas";

export const estateRoute: Router = Router()

estateRoute.post("", verifyToken, verifyPermission, validateBody(newRealEstateSchema), verifyAddressExists, createNewRealEstateController)
estateRoute.get("", listAllRealEstatesController)