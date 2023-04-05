import { Request, Response } from 'express'
import { UserAuthenticationUseCase } from './AuthenticateUserUseCase'

import * as bcrypt from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'

export class AuthenticateUser {

    constructor(
        private authUser: UserAuthenticationUseCase
    ) { }

    async handle(req: Request, res: Response) {

        const { email, password } = req.body

        const findUserEmail = await this.authUser.execute(email)
        if (findUserEmail == null)
            return res.status(404).send({ msg: 'As senhas senha ou email incorreto' })

        const verifyPassword = bcrypt.compareSync(password, findUserEmail.password)
        if (verifyPassword == false)
            return res.status(404).send({ msg: 'As senhas senha ou email incorreto' })

        const TOKEN = sign({ unserInfo: findUserEmail }, process.env.SECRET as string, { expiresIn: 300 })
        console.log(TOKEN)

        res.status(200).redirect(`/api/home/${findUserEmail.id}`)

    }

}