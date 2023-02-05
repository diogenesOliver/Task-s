import { Request, Response } from 'express'
import { GetAllUsersUseCase } from "./AllUsersUseCase";

export class AllUsersController{

    constructor(
        private allUsersController: GetAllUsersUseCase
    ){}

    async handle(req: Request, res: Response){

        const users = await this.allUsersController.execute()
        return res.status(200).json(users)

    }

}