import { Request, Response, NextFunction } from 'express';
import { scheduleRepo } from '../../repositories';
import { AppError } from '../../errors/AppError';

export const verifySchedulesExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { userId, realEstateId, date, hour } = req.body;
  
    
    const schedulesRealEstate = await scheduleRepo.findOne({ where:{
         realEstate: { id: realEstateId }, date, hour }
        })
        
      if (schedulesRealEstate) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
      }
      
    const schedulesUser = await scheduleRepo.findOne({ where:{
            user: { id: userId },
            date,
            hour,
        }
    })
    
    if (schedulesUser) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    return next()
  }; 
