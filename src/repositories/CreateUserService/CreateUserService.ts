import { User } from '@prisma/client'
import { ISaveFunctionGeneric, PrismaClientInstance } from '../GenericRepository'

export class CreateUserService implements ISaveFunctionGeneric<User>{
	async save(data: any): Promise<User> {
		await PrismaClientInstance.user.create({
			data: data,
			include: {
				Task: true
			}
		})

		return await PrismaClientInstance.user.findUnique({
			where: {
				email: data.email
			}
		}) as User
	}
}