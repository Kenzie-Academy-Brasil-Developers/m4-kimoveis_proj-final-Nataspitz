import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors/AppError";
import { JwtPayload, verify } from "jsonwebtoken";


export const verifyToken =  (req: Request, res: Response, next: NextFunction): void =>{
    const { authorization } = req.headers

    if (!authorization) throw new AppError("Missing bearer token", 401)

    const token: string = authorization.split(" ")[1]

    const decoded: string | JwtPayload = verify(token, process.env.SECRET_KEY!)
    res.locals = {...res.locals, decoded}
    console.log(res.locals.decoded);
    
    return next()
}
