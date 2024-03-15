import { IGetFunctionGeneric, PrismaClientInstance } from '../GenericRepository'

export class GetUserService implements IGetFunctionGeneric<any>{
	async get(params: string): Promise<object> {
		return await PrismaClientInstance.user.findUnique({
			where: { id: params },
			include: {
				Task: true
			}
		}) as object
	}
}