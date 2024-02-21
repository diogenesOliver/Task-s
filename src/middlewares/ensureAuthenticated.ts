import { config } from 'dotenv'
config()

import { StatusCodes } from '../logs/statusCode'

import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
	const authToken = req.headers.authorization
	if (!authToken)
		return res.status(StatusCodes.NoAtuhorized).json({
			message: 'Token is missing'
		})

	const [, token] = authToken.split(' ')
	try{
		verify(token, process.env.SECRET_KEY as string)
		return next()
	}catch(e: any){
		return res.status(StatusCodes.NoAtuhorized).json({
			message: 'Token invalid'
		})
	}
}