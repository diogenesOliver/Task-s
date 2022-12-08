import { Request, Response } from 'express'

import * as authConfig from '../../config/authConfig.json'
import * as jwt from 'jsonwebtoken'

function generateToken(params = {}){

    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400
    })

}

export async function renderSignUpPage(req: Request, res: Response) {
    res.render('signUpPage.ejs')
}

export async function renderLoginPage(req: Request, res: Response) {
    res.render('loginPage.ejs')
}