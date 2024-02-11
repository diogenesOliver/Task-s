import { StatusCodes } from '../../logs/statusCode'

import { Request, Response } from 'express'
import { genSalt, hash } from 'bcrypt'

import { CreateUserService } from '../../repositories/CreateUserService/CreateUserService'
import { User } from '@prisma/client'

export class CreateUserController {
	constructor(
		private createUserService: CreateUserService
	) { }

	private async cryptingPassword(password: string, confirmPassword: string) {
		const SALT: string = await genSalt(14)
		const CRYPTO_PASSWORD: string = await hash(
			password, SALT
		)

		password = CRYPTO_PASSWORD
		confirmPassword = CRYPTO_PASSWORD

		return {
			password,
			confirmPassword
		}
	}

	private async verifyngInputsValues(userDataArray: string[], res?: Response): Promise<string[] | Response<any, Record<string, any>> | undefined> {
		for (const data of userDataArray) {
			if (!data)
				return res?.status(StatusCodes.BadRequest).send('Invalid input')
		}

		return userDataArray
	}

	async createUserController(req: Request, res: Response) {
		try {
			const userData: User = req.body
			const userDataArray: string[] = [userData.name, userData.email, userData.password, userData.confirm_password]

			const verifyInputsValue: any = await this.verifyngInputsValues(userDataArray)
			if (verifyInputsValue.length > 0)
				return res?.status(StatusCodes.NotFound).send({ message: 'E-mail already registered' })

			if (userData.password != userData.confirm_password)
				return res?.status(StatusCodes.BadRequest).send('Password not match')

			const cryptingPassword = await this.cryptingPassword(userData.password, userData.confirm_password)

			userData.password = cryptingPassword.password
			userData.confirm_password = cryptingPassword.confirmPassword

			const createUserExec = await this.createUserService.save(userData)
			return res.status(StatusCodes.Success).send(createUserExec)
		} catch (e) {
			console.error(e)
			res.status(StatusCodes.ServerError).send('Internal Error - [500]')
		}
	}
}