import { Request, Response } from 'express'
import { UserModel } from "../../model/User";

import Logger from '../../../config/logger'

export class AuthenticateUser {

    async authenticateUser(req: Request, res: Response) {

        const { email, password } = req.body

        const user = await UserModel.findOne({ email }).select('+password')

        if (!user)
            return res.status(404).send({ error: 'User não encontrado!' })

    }

}