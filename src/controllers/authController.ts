import { UserModel } from "../model/User";
import { Request, Response } from 'express'

import Logger from '../../config/logger'

import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function creatingANewUser(req: Request, res: Response) {

    try {

        const { email, password, name, age } = req.body

        const salt = await bcrypt.genSalt(10)
        const passwordCrypt = await bcrypt.hash(password, salt)

        const userExist = await UserModel.findOne({ email: email })

        if(userExist)
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

        res.status(200).send(savingUserInDatabase)
        console.log(savingUserInDatabase)

    } catch (e: any) {

        Logger.error(`Error on System: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde!" })

    }
}

export async function getAllUsers(req: Request, res: Response){

    try{

        const users = await UserModel.find()

        return res.status(200).json(users)

    }catch(e: any){

        Logger.error(`Error on system: ${e.message}`)
        return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde" })

    }

}

export async function athenticateUser(req: Request, res: Response){

    const { email, password } = req.body

    const user = await UserModel.findOne({ email }).select('+password')

    if(!user)
        return res.status(404).send({ error: 'User não encontrado!' })
    
}