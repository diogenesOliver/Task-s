import { Request, Response } from 'express'
import { UserModel } from "../../model/User";

import * as bcrypt from 'bcrypt'

import Logger from '../../../config/logger'

interface IPasswordInterface{

    password: string | undefined

}

export class AuthenticateUser {

    async authenticateUser(req: Request, res: Response) {

        const { email, password } = req.body

        const user = await UserModel.findOne({ email }).select('+password')
        const verifyPassword = bcrypt.compareSync(password, user.password)

        console.log(verifyPassword)

        if (!user)
            return res.status(404).send({ error: 'User não encontrado!' })

    }

}