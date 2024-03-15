import { IGetAll, PrismaClientInstance } from '../GenericRepository'

export class GetTasksService implements IGetAll<object[]>{
	async returninAll(): Promise<object[]> {
		return await PrismaClientInstance.task.findMany({
			include: {
				Comment: true
			}
		}) as object[]
	}
}