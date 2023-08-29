import { NextFunction, Request, Response } from "express";
import { userRepo } from "../../repositories";
import { User } from "../../entities";
import { AppError } from "../../errors/AppError";

export const validateEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { email } = req.body

    const emailExists: User | null = await userRepo.findOneBy({ email })

    if (emailExists) {
        throw new AppError("Email already exists", 409)
    }

    return next()
}