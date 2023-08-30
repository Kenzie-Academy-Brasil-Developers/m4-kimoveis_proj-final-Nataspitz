import { Category } from "../../entities"
import { newCategory } from "../../interfaces"
import { categoryRepo } from "../../repositories"

export const createNewCategory = async (payload: newCategory ): Promise<Category> =>{
    const newCategory: Category = categoryRepo.create(payload)
    await categoryRepo.save(newCategory)

    return newCategory
}

export const listAllCategories = async (): Promise<Category[]> =>{
    return await categoryRepo.find()
}