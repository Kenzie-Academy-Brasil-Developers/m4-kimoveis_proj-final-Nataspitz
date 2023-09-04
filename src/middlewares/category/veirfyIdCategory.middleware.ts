import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const verifyIdCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { id } = req.params
    const idCategory = Number(id)

    const category = await categoryRepo.findOneBy({ id: idCategory })

    if (!category) throw new AppError("Category not found", 404)

    const categoryId = category.id
    res.locals = {...res.locals, categoryId}

    return next()
}