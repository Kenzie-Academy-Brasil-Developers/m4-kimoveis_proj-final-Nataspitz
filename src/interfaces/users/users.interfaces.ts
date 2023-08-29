import { z } from "zod";
import { createUserSchema, responseUserSchema, updateUserSchema, userLoginSchema } from "../../schemas";
import { DeepPartial } from "typeorm";
import { User } from "../../entities";

export type NewUser =  z.infer<typeof createUserSchema>
export type userRuturn =  z.infer<typeof responseUserSchema>
export type loginUser = z.infer<typeof userLoginSchema>
export type token = { token: string }
export type userUpdate = DeepPartial<User>
