import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class GetAllTasks{

    async getAllTasks(req: Request, res: Response){

        try{
        
            const task = await TaskModel.find()
    
            return res.status(200).json(task)
    
        }catch(e: any){
    
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })
    
        }

    }

}