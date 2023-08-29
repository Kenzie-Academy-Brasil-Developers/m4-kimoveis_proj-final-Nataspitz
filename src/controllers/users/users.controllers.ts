import { Request, Response } from "express";
import { User } from "../../entities";
import { createNewUser, listUsers, userLogin, updateUser } from "../../services";
import { userRuturn } from "../../interfaces/users/users.interfaces";

export const createUserController = async (req: Request, res: Response): Promise<Response> =>{
    const user: userRuturn = await createNewUser(req.body)
    return res.status(201).json(user)
}

export const loginserController = async (req: Request, res: Response): Promise<Response> =>{
    const { body } = req
    return res.status(200).json(await userLogin(body))
}

export const listUserController = async (req: Request, res: Response): Promise<Response> =>{
    return res.status(200).json(await listUsers())
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> =>{
    const { user } = res.locals
    const update = await updateUser(user, req.body)
    return res.status(200).json(update)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> =>{
    const { user } = res.locals
    
    return res.status(204).send()
}