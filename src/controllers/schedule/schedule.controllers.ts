import { Request, Response } from "express";
import { Schedule } from "../../entities";
import { createSchedule, listSchedulesByRealEstate } from "../../services";

export const createScheduleController = async (req: Request, res: Response): Promise<Response> =>{
    const { body } = req
    const { sub } = res.locals.decoded

    await createSchedule( body, sub )
    return res.status(201).json({ message: "Schedule created" })
}

export const listSchedulesController = async (req: Request, res: Response): Promise<Response> =>{
    const id = Number(req.params.id)
    return res.status(200).json(await listSchedulesByRealEstate(id))
}