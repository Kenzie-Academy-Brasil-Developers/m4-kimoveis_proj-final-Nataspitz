import { NextFunction, Request, Response } from "express";
import { User } from "../../entities";
import { userRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { id } = req.body

    const idExists: User | null = await userRepo.findOneBy({ id })

    if (!idExists) {
        throw new AppError("User not found", 404)
    }

    const user = res.locals.user
    res.locals = {...res.locals, user}

    return next()
}