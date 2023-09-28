import { IGetAll, PrismaClientInstance } from './GenericsInterfaces/GenericRepository'

export class GetTasksService implements IGetAll<object[]>{
	async returninAll(): Promise<object[]> {
		return await PrismaClientInstance.task.findMany() as object[]
	}
}