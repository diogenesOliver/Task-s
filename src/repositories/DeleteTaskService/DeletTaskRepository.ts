import { IDelete, PrismaClientInstance } from '../GenericsInterfaces/GenericRepository'

export class DeleteTaskService implements IDelete<number>{
	async deleteData(id: number): Promise<number> {
		await PrismaClientInstance.task.delete({
			where: {
				id: id
			}
		})

		return id
	}
}