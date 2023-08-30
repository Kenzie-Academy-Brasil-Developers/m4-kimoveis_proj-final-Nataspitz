import { Router } from "express";
import { createCategoryController, listAllCategoriesController } from "../../controllers";
import { validateBody, validateName, verifyPermission, verifyToken } from "../../middlewares";
import { newCategorySchema } from "../../schemas";

export const categoriesRoute: Router = Router()

categoriesRoute.post("",verifyToken, verifyPermission, validateBody(newCategorySchema), validateName, createCategoryController)
categoriesRoute.get("", listAllCategoriesController)
categoriesRoute.get("/:id/realEstate", )