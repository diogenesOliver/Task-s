import { Request, Response } from 'express'
import { GetUserService } from '../../repositories/GetUsersService'

export class GetUserController {
	constructor(
        private getUserService: GetUserService
	) { }

	async getUserController(req: Request, res: Response) {
		try {
			const userID = Number(req.params.id)

			const user = await this.getUserService.get(userID)
			res.status(200).send(user)

			return {
				statusCode: 200,
				body: user
			}
		}catch(e){ console.log(e) }
	}
}