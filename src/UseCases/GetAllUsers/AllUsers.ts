import { UserModel } from "../../model/User";
import { Request, Response } from 'express'

import Logger from '../../../config/logger'

export class AllUsers {

    async gettingAllUsers(req: Request, res: Response) {

        try {

            const users = await UserModel.find()

            return res.status(200).json(users)

        } catch (e: any) {

            Logger.error(`Error on system: ${e.message}`)
            return res.status(500).json({ e: "Houve um erro! Tente novamente mais tarde" })

        }

    }

}