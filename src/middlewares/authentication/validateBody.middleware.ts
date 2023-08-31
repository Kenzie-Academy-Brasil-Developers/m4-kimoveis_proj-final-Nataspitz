import { NextFunction, Request, Response } from "express"

export const validateBody = ( schema: Zod.AnyZodObject) => (req: Request, res: Response, next: NextFunction):  void =>{
    console.log(req.body);
    req.body = schema.parse(req.body)
    
    return next()
}