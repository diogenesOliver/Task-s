import { Response, Request } from "express"
import { TaskModel } from '../model/Task'

export async function createTask(req: Request, res: Response) {

    try{

        const data = await req.body
        const task = TaskModel.create(data)

        return res.status(200).json(task)

    }catch(e: any){
        return res.status(404).json({ error: 'Houve um erro tente novamente mais tarde!' })
    }

}