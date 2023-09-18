import { IGetFunctionGeneric, PrismaClientInstance } from './GenericsInterfaces/GenericRepository'

export class GetUserService implements IGetFunctionGeneric<any>{
	async get(params: number): Promise<any> {
		return await PrismaClientInstance.user.findUnique({
			where: { id: params },
			include: {
				Task: true
			}
		})
	}
}