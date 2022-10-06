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

export async function getAllTasks(req: Request, res: Response){

    try{
        
        const task = await TaskModel.find()

        return res.status(200).json(task)

    }catch(e: any){

        return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })

    }

}

export async function removeTask(req: Request, res: Response){

    try{

        const id = req.params.id
        const task = await TaskModel.findById(id)

        if(!task){
            return res.status(404).json({ error: 'Essa task não existe' })
        }

        await task?.delete()

        return res.status(200).send('Task removida com sucesso!')

    }catch(e: any){

        return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })

    }

}

export async function updateTask(req: Request, res: Response){

    try{

        const id = req.params.id
        const data = req.body
        const task = await TaskModel.findById(id)

        if(!task){
            return res.status(404).json({ error: 'Essa task não existe' })
        }

        await TaskModel.updateOne({ id: id }, data)

        return res.status(200).send(data)

    }catch(e: any){
        return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })
    }

}