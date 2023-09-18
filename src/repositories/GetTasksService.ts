import { IGetAll, PrismaClientInstance } from './GenericsInterfaces/GenericRepository'

export class GetTasksService implements IGetAll<any>{
	returninAll(): Promise<any> {
		return PrismaClientInstance.task.findMany()
	}
}