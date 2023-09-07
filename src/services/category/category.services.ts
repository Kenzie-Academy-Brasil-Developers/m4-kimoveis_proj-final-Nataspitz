import { Request, Response } from "express"
import { Category, RealEstate } from "../../entities"
import { newCategory } from "../../interfaces"
import { categoryRepo, realEstateRepo } from "../../repositories"

export const createNewCategory = async (payload: newCategory ): Promise<Category> =>{
    const newCategory: Category = categoryRepo.create(payload)
    await categoryRepo.save(newCategory)

    return newCategory
}

export const listAllCategories = async (id: number): Promise<Category[]> =>{
const categories = await categoryRepo.find()

return categories

}

export const listRealEstatesByCategory = async (idCategory: number): Promise<any> =>{

    const realEstates = await categoryRepo.findOne({
        where:  { id: idCategory },
        relations: {
            realEstate: true
        }
    })
    
    
    return realEstates
    
    }