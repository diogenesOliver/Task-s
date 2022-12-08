import { UserModel } from "../model/User";
import { Request, Response } from 'express'

import * as authConfig from '../../config/authConfig.json'

import Logger from '../../config/logger'

import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'

function generateToken(params = {}){

    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })

}

export async function athenticateUser(req: Request, res: Response){

    const { email, password } = req.body

    const user = await UserModel.findOne({ email }).select('+password')

    if(!user)
        return res.status(404).send({ error: 'User não encontrado!' })
    
}

/* Render pages */

export async function renderSignUpPage(req: Request, res: Response) {
    res.render('signUpPage.ejs')
}

export async function renderLoginPage(req: Request, res: Response) {
    res.render('loginPage.ejs')
}