import { Request, Response } from 'express'
import { UserLoginService } from '../../repositories/LoginUserService'
import { compare } from 'bcrypt'
import { User } from '@prisma/client'

export class UserLoginController {
	constructor(
		private userLoginService: UserLoginService
	) { }

	private async verifyPasswordWithCryptPassword(password: string, cryptPassword: string): Promise<boolean> {
		return await compare(password, cryptPassword)
	}

	async verifyEmailInDatabase(req: Request, res: Response) {
		try {
			const inputData: User = req.body
			const findEmail = await this.userLoginService.findData(inputData.email)

			const user = await this.verifyPasswordWithCryptPassword(inputData.password, findEmail.password)
			if (user == false)
				return res.status(404).json({ msg: 'Some Error' })

			return res.status(200).send(findEmail)
		} catch (e) { console.log(e) }
	}
}