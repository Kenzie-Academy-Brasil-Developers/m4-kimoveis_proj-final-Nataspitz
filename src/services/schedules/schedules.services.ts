import { Schedule } from "../../entities";
import { AppError } from "../../errors/AppError";
import { newSchedule } from "../../interfaces";
import { realEstateRepo, scheduleRepo } from "../../repositories";


export const createSchedule = async (payload: newSchedule, userId: number): Promise<void> =>{
    const business = new Date(payload.date + " " + payload.hour);
    const businessHour = business.getHours()
    const businessDate = business.getDay()

    if (businessDate < 1 || businessDate > 5) {
        throw new AppError("Invalid date, work days are monday to friday")
    }

    if (businessHour < 8 || businessHour > 18) {
        throw new AppError("Invalid hour, available times are 8AM to 18PM")
    }

    const newSchedule: Schedule = scheduleRepo.create({ user: { id: userId }, realEstate: { id: payload.realEstateId }, ...payload })
    await scheduleRepo.save(newSchedule)
}

export const listSchedulesByRealEstate = async (realEstateId: number): Promise<any> =>{

    const schedules = await realEstateRepo.findOne({
        where: { id: realEstateId  },
        relations: { schedules: { user: true }, address: true,  category: true }
    })

    return schedules
}