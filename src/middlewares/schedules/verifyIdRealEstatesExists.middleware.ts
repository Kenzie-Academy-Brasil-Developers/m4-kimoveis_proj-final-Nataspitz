import { Request, Response, NextFunction } from "express";
import { realEstateRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const verifyIdRealEstatesBySchedules = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { realEstateId } = req.body

    const realEstate = await realEstateRepo.findOneBy({ id: realEstateId }) 

    if (!realEstate) throw new AppError("RealEstate not found", 404)

    return next();

}