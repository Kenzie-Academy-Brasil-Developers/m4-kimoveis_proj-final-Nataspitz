import { Request, Response, NextFunction } from "express"
import { AppError } from "../../errors/AppError"

export const compareId = (req: Request, res: Response, next: NextFunction): void =>{
    const { id } = req.params
    const { sub, admin } = res.locals.decoded

    if (admin) return next()

    if (sub !== id) {
        throw new AppError("Insufficient permission", 403)
    }

    return next()

}