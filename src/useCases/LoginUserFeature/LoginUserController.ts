import { config } from 'dotenv'
config()

import { Request, Response } from 'express'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { UserLoginService } from '../../repositories/LoginUserService/LoginUserService'
import { User } from '@prisma/client'

export class UserLoginController {
	constructor(
		private userLoginService: UserLoginService
	) { }

	private async verifyPasswordWithCryptPassword(password: string, cryptPassword: string): Promise<boolean> {
		return await compare(password, cryptPassword)
	}

	private generateAToken(userId: string): string {
		return sign({}, process.env.SECRET_KEY as string, {
			subject: userId
		})
	}

	async verifyEmailInDatabase(req: Request, res: Response) {
		try {
			const inputData: User = req.body
			const findEmail = await this.userLoginService.findData(inputData.email)

			const user = await this.verifyPasswordWithCryptPassword(inputData.password, findEmail.password)
			if (user == false)
				return res.status(404).json({ msg: 'Some Error' })

			const token = this.generateAToken(findEmail.id.toString())

			return res.status(200).json(token)
		} catch (e) { console.log(e) }
	}
}