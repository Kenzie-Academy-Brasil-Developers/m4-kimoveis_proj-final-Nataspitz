import { NextFunction, Request, Response } from "express";
import { User } from "../../entities";
import { userRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const verifyIdExists = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const id = Number(req.params.id)

    const user: User | null = await userRepo.findOneBy({ id })

    if (!user) {
        throw new AppError("User not found", 404)
    }
    
    res.locals = {...res.locals, user}

    return next()
}