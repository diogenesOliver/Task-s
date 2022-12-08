import { Request, Response } from 'express'
import { UserModel } from "../../model/User";

import Logger from '../../../config/logger'

import * as bcrypt from 'bcrypt';


export class CreateUser {

    async createNewUser(req: Request, res: Response) {

        try {

            const { email, password, name, age } = req.body

            const salt = await bcrypt.genSalt(10)
            const passwordCrypt = await bcrypt.hash(password, salt)

            const userExist = await UserModel.findOne({ email: email })

            if (userExist)
                return res.status(400).send('O email digitado já esta em uso!')

            const newUser = new UserModel(

                {
                    email,
                    password: passwordCrypt,
                    name,
                    age
                }

            )

            const savingUserInDatabase = await UserModel.create(newUser)

            res.status(200).redirect('/api/home')

            console.log(savingUserInDatabase)

        } catch (e: any) {

            Logger.error(`Error on System: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

        }

    }

}