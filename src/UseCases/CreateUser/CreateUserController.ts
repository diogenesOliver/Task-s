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

    }

    /* async handle(req: Request, res: Response) {

        const { email, password } = req.body

        const salt = await bcrypt.genSalt(10)
        const passwordCrypt = await bcrypt.hash(password, salt)

        try {

            await this.createUserUseCase.execute({
                email,
                password: passwordCrypt
            })

            res.status(200).redirect('/api/home')

        } catch (e: any) {

            return res.status(400).json({
                message: e.message || 'Unxpected error'
            })

        }

    } */

}