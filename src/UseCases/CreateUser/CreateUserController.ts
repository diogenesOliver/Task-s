import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

import * as bcrypt from 'bcrypt';
import { UserEntitie } from '../../entities/User';
import { IUserModel } from '../../model/User';

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response) {

        const { email, password } = req.body

        const salt = await bcrypt.genSalt(14)
        const cryptPassword = await bcrypt.hash(password, salt) 

        const testCrypt = await this.createUserUseCase.execute({
            email: email,
            password: cryptPassword
        })

        console.log(testCrypt)

        res.redirect('/api/home')
    }

}