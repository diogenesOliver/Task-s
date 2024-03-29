import { IDelete, PrismaClientInstance } from '../GenericRepository'

export class DeleteTaskService implements IDelete<string>{
	async deleteData(id: string): Promise<string> {
		await PrismaClientInstance.task.delete({
			where: {
				id: id
			}
		})

		return id
	}
}