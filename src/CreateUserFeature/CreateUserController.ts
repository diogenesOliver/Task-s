import { Request, Response } from "express";
import { CreateUserService } from '../repositories/CreateUserService'
import { User } from "@prisma/client";

export class CreateUserController{
    constructor(
        private createUserService: CreateUserService
    ){}

    async createUserController(req: Request, res: Response){
        try{
            const userData: User = req.body
            this.createUserService.save(userData)

            res.status(200).send('Success to create user')
            }catch(e){ console.log(e) }
    }
}