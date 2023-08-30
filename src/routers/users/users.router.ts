import { Router } from "express";
import { createUserController, deleteUserController, listUserController, loginserController, updateUserController } from "../../controllers";
import { compareId, validateBody, validateEmail, verifyIdExists, verifyPermission, verifyToken } from "../../middlewares";
import { createUserSchema, updateUserSchema, userLoginSchema } from "../../schemas";

export const usersRoute: Router = Router()
export const loginRoute: Router = Router()

usersRoute.post("", validateBody(createUserSchema), validateEmail, createUserController)
loginRoute.post("", validateBody(userLoginSchema), loginserController)
usersRoute.get("", verifyToken, verifyPermission, listUserController)

usersRoute.use("/:id", verifyIdExists, verifyToken)
usersRoute.patch("/:id", compareId, validateBody(updateUserSchema), updateUserController)
usersRoute.delete("/:id", verifyPermission, deleteUserController)