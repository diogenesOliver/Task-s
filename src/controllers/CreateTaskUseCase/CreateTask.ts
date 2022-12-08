import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class CreateTask{

    async createNewTask(req: Request, res: Response){

        try{

            const data = req.body
            const task = await TaskModel.create(data)
    
            return res.status(200).redirect('/api/home')
    
        }catch(e: any){
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ error: 'Houve um erro tente novamente mais tarde!' })
        }

    }

}