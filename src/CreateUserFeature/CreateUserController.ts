import { Request, Response } from "express";
import { CreateUserService } from '../repositories/CreateUserService'
import { User } from "@prisma/client";

export class CreateUserController {
    constructor(
        private createUserService: CreateUserService
    ) { }

    async createUserController(req: Request, res: Response) {
        try {
            const userData: User = req.body
            if(userData.password != userData.confirm_password)
                return res.status(404).send('Passwor not match')

            await this.createUserService.save(userData)

            res.status(200).send(userData)
        } catch (e) { console.log(e) }
    }
}