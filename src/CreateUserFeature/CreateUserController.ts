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

            const userDataArray: string[] = [userData.name, userData.email, userData.password, userData.confirm_password]
            for(let data of userDataArray){
                if(data == '')
                    return res.status(404).send('ERROR')
            }

            if(userData.password != userData.confirm_password)
                return res.status(404).send('Passwor not match')

            const createUserExec =  await this.createUserService.save(userData)
            return res.status(200).send(createUserExec)
        } catch (e) { console.log(e) }
    }
}