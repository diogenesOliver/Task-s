import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class TaskFilter{

    async filterTheTasks(req: Request, res: Response){

        try{

            const difficultyLevel = req.params
            const task = await TaskModel.find(difficultyLevel)
    
            return res.status(200).json(task)
    
        }catch(e: any){
    
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" }) 
    
        }

    }

}