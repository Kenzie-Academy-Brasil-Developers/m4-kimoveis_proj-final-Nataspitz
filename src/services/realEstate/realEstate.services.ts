import { RealEstate } from "../../entities";
import { newRealEstate } from "../../interfaces";
import { realEstateRepo } from "../../repositories";

export const createNewRealEstate = async (payload: newRealEstate): Promise<RealEstate> =>{
    const newReal: RealEstate = realEstateRepo.create(payload)
    return await realEstateRepo.save(newReal)
}

export const listAllRealEstates = async (): Promise<RealEstate[]> =>{
    return await realEstateRepo.find()
}