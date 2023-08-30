import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const validateName = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { name } = req.body

    const nameExists = await categoryRepo.findOneBy({ name })

    if (nameExists) throw new AppError("Category already exists", 409)

    return next()
}