import { NextFunction, Request, Response } from "express"
import { realEstateRepo } from "../../repositories"
import { AppError } from "../../errors/AppError"

export const verifyIdRealEstates = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const id = Number(req.params.id)

    const realEstate = await realEstateRepo.findOneBy({ id })

    if (!realEstate) throw new AppError("RealEstate not found", 404)

    res.locals = {...res.locals, realEstate }
    return next()
}