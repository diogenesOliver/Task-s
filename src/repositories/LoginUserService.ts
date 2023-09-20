import { PrismaClientInstance, IFindData } from './GenericsInterfaces/GenericRepository'

export class UserLoginService implements IFindData<string>{
	async findData(data: string): Promise<any> {
		const userEmail = await PrismaClientInstance.user.findUnique({
			where: {
				email: data
			}
		})

		if(!!userEmail == false)
			throw new Error('User not found')

		return userEmail
	}
}