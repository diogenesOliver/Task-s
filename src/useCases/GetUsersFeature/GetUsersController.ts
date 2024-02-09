import { Request, Response } from 'express'
import { GetUserService } from '../../repositories/GetUserService/GetUsersService'

import { getRedis, redisClient, setRedis } from '../../redisConfig'

export class GetUserController {
	constructor(
		private getUserService: GetUserService
	) { }

	async getUserController(req: Request, res: Response) {
		try {
			const userFromCache = await getRedis('user')
			if (userFromCache){
				res.send(JSON.parse(userFromCache))
				return redisClient.del('user', err => {
					if(err) throw Error()
				})
			}

			const userID: string = req.params.id
			const user = await this.getUserService.get(userID)
			await setRedis('user', JSON.stringify(user))

			return res.status(200).send(user)
		} catch (e) {
			console.error(e)
			res.status(500).send('Internal Error - [500]')
		}
	}
}