import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";

export const verifyPermission =  (req: Request, res: Response, next: NextFunction): void =>{
    const { admin } = res.locals.decoded

    if (!admin) throw new AppError("Insufficient permission", 403)

    return next()
}