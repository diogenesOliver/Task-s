import { User } from '@prisma/client'
import { ISaveFunctionGeneric, PrismaClientInstance } from './GenericsInterfaces/GenericRepository'

export class CreateUserService implements ISaveFunctionGeneric<User>{
	async save(data: User): Promise<User> {
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