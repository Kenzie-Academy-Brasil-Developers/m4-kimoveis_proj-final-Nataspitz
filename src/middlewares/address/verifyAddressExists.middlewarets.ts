import { NextFunction, Request, Response } from "express";
import { addressRepo } from "../../repositories";
import { AppError } from "../../errors/AppError";

export const verifyAddressExists = async (req: Request, res: Response, next: NextFunction): Promise<void> =>{
    const { street, zipCode, number, city, state } = req.body.address

    const addressExists = await addressRepo.findOne({
        where: { street, zipCode, number, city, state },
      })

    if (addressExists) throw new AppError( "Address already exists", 409)

    return next()
}