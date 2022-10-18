import { UserModel } from "../model/User";
import { Request, Response } from 'express'

import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function creatingANewUser(req: Request, res: Response){

    const { email, password, name, age } = req.body

    const salt = await bcrypt.genSalt(10)
    const passwordCrypt = await bcrypt.hash(password, salt)

    const newUser = new UserModel(

        {
            email,
            password: passwordCrypt,
            name,
            age
        }

    )

    res.status(200).send(newUser)
}