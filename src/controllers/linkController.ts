import { Response, Request } from "express"
import { TaskModel } from '../model/Task'

import Logger from '../../config/logger'

export async function findTaskByTitle(req: Request, res: Response){

    try{

        const findByTitle = req.params
        const task = await TaskModel.find(findByTitle)

        return res.status(200).json(task)

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }

}

export async function changingCardStatus(req: Request, res: Response){

    try{

        let { status } = req.body
        const taskId = req.params.id
        const task = await TaskModel.findById(taskId)

        if(!task)
            return res.status(500).send('Houve um erro tente novamente mais tarde!')

        status = true
        await TaskModel.updateOne({ id: taskId }, status)
        
        return res.status(200).send('Card atualizado com sucesso!')

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }

}

export async function gettingAllTasksCompleted(req: Request, res: Response){

    try{

        const statusTask = true
        const task = await TaskModel.find({ status: statusTask })

        return res.status(200).send(task)

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }

}

export async function gettingAllUncompletedTasks(req: Request, res: Response){

    try{

        const statusTask = false
        const task = await TaskModel.find({ status: statusTask })

        return res.status(200).send(task)

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }

}