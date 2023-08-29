import { Router } from "express";
import { createUserController, listUserController, loginserController, updateUserController } from "../../controllers";
import { validateBody, validateEmail, verifyIdExists, verifyPermission, verifyToken } from "../../middlewares";
import { createUserSchema, userLoginSchema } from "../../schemas";

export const usersRoute: Router = Router()
export const loginRoute: Router = Router()

usersRoute.post("", validateBody(createUserSchema), validateEmail, createUserController)
loginRoute.post("", validateBody(userLoginSchema), loginserController)
usersRoute.get("", verifyToken, verifyPermission, listUserController)

usersRoute.use("/:id", verifyIdExists, verifyToken)
usersRoute.patch("/:id",updateUserController)
usersRoute.delete("/:id")