import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors/AppError";
import { newRealEstate, realEstatesBody, realEstatesReturn } from "../../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../../repositories";

export const createNewRealEstate = async (payload: newRealEstate) =>{
    const { address, categoryId, ...body } = payload

    const idCategory: Category | null = await categoryRepo.findOneBy({ id: categoryId}) 

    if (!idCategory) throw new AppError("Category not found", 404)

    const newAddress: Address  = addressRepo.create(address)
    await addressRepo.save(newAddress)

    const newReal: RealEstate = realEstateRepo.create({address: newAddress, category: idCategory , ...body})
    await realEstateRepo.save(newReal)

    return newReal
}

export const listAllRealEstates = async (): Promise<RealEstate[]> =>{
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    })
}