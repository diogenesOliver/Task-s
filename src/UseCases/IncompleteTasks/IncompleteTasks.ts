import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class IncompleteTasks{

    async gettingAllUncompletedTasks(req: Request, res: Response){

        try{

            const task = await TaskModel.find({ status: false })
    
            return res.status(200).send(task)
    
        }catch(e: any){
    
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })
    
        }

    }

}