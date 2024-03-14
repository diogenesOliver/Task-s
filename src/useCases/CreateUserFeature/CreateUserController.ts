import { StatusCodes } from '../../logs/statusCode'
import { FastifyInstance } from 'fastify'
import { z } from 'zod'

import { CreateUserService } from '../../repositories/CreateUserService/CreateUserService'

import { verifyngInputsValues } from './inputValidation_Feature'
import { cryptingPassword } from './cryptingPassword_Feature'

import SendMail from '../../config/SendMail'

export class CreateUserController {
	constructor(
		private createUserService: CreateUserService
	) { }

	createUserController = async (app: FastifyInstance) => {
		app.post('/create/user', async (request, reply) => {
			try {
				const inputDataValidation = z.object({
					name: z.string(),
					email: z.string().email(),
					password: z.string(),
					confirm_password: z.string()
				})

				const userData = inputDataValidation.parse(request.body)
				const userDataArray: string[] = [userData.name, userData.email, userData.password, userData.confirm_password]

				await verifyngInputsValues(userDataArray)

				if (userData.password != userData.confirm_password)
					return reply?.status(StatusCodes.BadRequest).send('Password not match')

				const cryptingInputs = await cryptingPassword(userData.password, userData.confirm_password)
				userData.password = cryptingInputs.password
				userData.confirm_password = cryptingInputs.confirmPassword

				const createUserExec = await this.createUserService.save(userData)

				await SendMail.sendMail({
					from: 'Que Test <queue@queuetest.com.br>',
					to: `${createUserExec.name} <${createUserExec.email}>`,
					subject: 'Cadastro de Usuário',
					html: 'Welcome to Task-s Service'
				})				

				return reply.status(StatusCodes.Success).send(createUserExec)
			} catch (e) {
				console.error(e)
				reply.status(StatusCodes.ServerError).send('Internal Error - [500]')
			}
		})
	}
}