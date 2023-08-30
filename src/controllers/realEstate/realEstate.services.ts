import { Request, Response } from "express";
import { createNewRealEstate, listAllRealEstates } from "../../services";

export const createNewRealEstateController = async (req: Request, res: Response): Promise<Response> =>{
    const { body } = req
    return res.status(201).json(await createNewRealEstate(body))
}

export const listAllRealEstatesController = async (req: Request, res: Response): Promise<Response> =>{
    return res.status(200).json(await listAllRealEstates())
}