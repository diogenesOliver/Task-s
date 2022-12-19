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

            /* return res.status(200).redirect('/api/home') */

        }catch(e: any){

            return res.status(500).json({
                message: e.message || 'Unxpected error'
            })

        }

    }

}