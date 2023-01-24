import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase';

import * as bcrypt from 'bcrypt';

export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response) {

        const userData = req.body

        await bcrypt.hash(
            userData.password,
            await bcrypt.genSalt(10)
        )

        await this.createUserUseCase.execute(userData)
        res.redirect('/api/home')

    }

}