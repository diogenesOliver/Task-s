import { Comment } from '@prisma/client'
import { ISaveFunctionGeneric, PrismaClientInstance } from '../GenericsInterfaces/GenericRepository'

export class CreateCommentService implements ISaveFunctionGeneric<Comment>{
	async save(data: any): Promise<any> {
		await PrismaClientInstance.comment.create({
			data: data
		})

		return data
	}
}