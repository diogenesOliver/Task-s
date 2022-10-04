import { Response, Request } from "express"
import { TaskModel } from '../model/Task'

export async function createTask(req: Request, res: Response) {

    try{

        const data = req.body
        const task = await TaskModel.create(data)

        return res.status(200).json(task)

    }catch(e: any){
        console.log(e)
        return res.status(500).json({ error: 'Houve um erro tente novamente mais tarde!' })
    }

}

export async function filteringTask(req: Request, res: Response){

    try{

        const difficultyLevel = req.params
        const task = await TaskModel.find(difficultyLevel)

        return res.status(200).json(task)

    }catch(e: any){

        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" }) 

    }

}