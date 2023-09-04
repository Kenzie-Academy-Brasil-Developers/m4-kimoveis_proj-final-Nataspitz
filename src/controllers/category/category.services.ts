import { Request, Response } from "express";
import { createNewCategory, listAllCategories, listRealEstatesByCategory } from "../../services";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> =>{
    const { body } = req
    return res.status(201).json( await createNewCategory(body))
}

export const listAllCategoriesController = async (req: Request, res: Response): Promise<Response> =>{
    const id = Number(req.params.id)
    return res.status(200).json(await listAllCategories(id))
}

export const listRealEstatesByCategoriesController = async (req: Request, res: Response): Promise<Response> =>{
    const id = Number(req.params.id)
    return res.status(200).json(await listRealEstatesByCategory(id))
}