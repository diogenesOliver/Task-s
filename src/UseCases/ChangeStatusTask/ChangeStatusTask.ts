import { Response, Request } from "express"
import { TaskModel } from "../../model/Task"

export class ChangeStatusTask{
    async changingStatusTask(req: Request, res: Response){
        try{
            let { status } = req.body
            const taskId = req.params.id
            const task = await TaskModel.findById(taskId)
        }catch(e: any){
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })
        }
    }
}