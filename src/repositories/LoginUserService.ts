import { PrismaClientInstance, IFindData } from './GenericsInterfaces/GenericRepository'

export class UserLoginService implements IFindData<string>{
	async findData(data: string): Promise<any> {
		return await PrismaClientInstance.user.findUnique({
			where: {
				email: data
			}
		})
	}
}