import { UserModel } from "../model/User";
import { Request, Response } from 'express'

import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

export async function functionTeste(req: Request, res: Response){

    const dataJson = req.body

    res.send(dataJson)
    console.log(dataJson)
}