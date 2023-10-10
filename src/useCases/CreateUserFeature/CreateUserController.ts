import { Request, Response } from 'express'
import { genSalt, hash } from 'bcrypt'

import { CreateUserService } from '../../repositories/CreateUserService'
import { User } from '@prisma/client'

export class CreateUserController {
	constructor(
		private createUserService: CreateUserService
	) { }

	async createUserController(req: Request, res: Response) {
		try {
			const userData: User = req.body

			const userDataArray = [userData.name, userData.email, userData.password, userData.confirm_password]

			for (const data of userDataArray) {
				if (data == '')
					return res.status(404).send('ERROR')
			}

			if (userData.password != userData.confirm_password)
				return res.status(404).send('Passwor not match')

			const SALT: string = await genSalt(14)
			const CRYPTO_PASSWORD: string = await hash(
				userData.password, SALT
			)

			userData.password = CRYPTO_PASSWORD
			userData.confirm_password = CRYPTO_PASSWORD

			const createUserExec = await this.createUserService.save(userData)
			return res.status(200).send(createUserExec)
		} catch (e) { console.log(e) }
	}
}