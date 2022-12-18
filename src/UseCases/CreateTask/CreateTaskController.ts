import { Response, Request } from "express"
import { CreateTaskUseCase } from "./CreateUserUseCase"

export class CreateTaskController{

    constructor(
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handle(req: Request, res: Response){

        const { title, description, difficulty } = req.body

        try{

            await this.createTaskUseCase.execute({
                title,
                description,
                difficulty
            })

        }catch(e: any){

            return res.status(500).json({
                message: e.message || 'Unxpected error'
            })

        }

    }

}

/* export class CreateTask{

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

} */