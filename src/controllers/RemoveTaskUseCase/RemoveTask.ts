import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

import Logger from '../../../config/logger'

export class RemoveTask{

    async removeTask(req: Request, res: Response){

        try{

            const id = req.params.id
            const task = await TaskModel.findById(id)
    
            if(!task){
                return res.status(404).json({ error: 'Essa task não existe' })
            }
    
            await task?.delete()
    
            return res.status(200).send('Task removida com sucesso!')
    
        }catch(e: any){
    
            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })
    
        }

    }

}