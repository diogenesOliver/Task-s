import { Response, Request } from "express"
import { TaskModel } from '../model/Task'

import Logger from '../../config/logger'

export async function createTask(req: Request, res: Response) {

    try{

        const data = req.body
        const task = await TaskModel.create(data)

        return res.status(200).render('homePage')

    }catch(e: any){
        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ error: 'Houve um erro tente novamente mais tarde!' })
    }

}

export async function filteringTask(req: Request, res: Response){

    try{

        const difficultyLevel = req.params
        const task = await TaskModel.find(difficultyLevel)

        return res.status(200).json(task)

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" }) 

    }

}

export async function getAllTasks(req: Request, res: Response){

    try{
        
        const task = await TaskModel.find()

        return res.status(200).json(task)

    }catch(e: any){

        Logger.error(`Error on System: ${e.message}`)
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

        Logger.error(`Error on System: ${e.message}`)
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
        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! tente novamente mais tarde!" })
    }

}

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

/* Render pages */

export async function renderHomePage(req: Request, res: Response){
    res.render('homePage.ejs')
}

export async function renderPageUncompletedTasks(req: Request, res: Response) {
    res.render('uncompletedTaksPage.ejs')
}

export async function renderPageCompletedTasks(req: Request, res: Response) {
    res.render('completedTasks.ejs')
}