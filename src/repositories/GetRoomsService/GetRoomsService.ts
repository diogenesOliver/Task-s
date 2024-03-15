import { IGetAll, PrismaClientInstance } from '../GenericRepository'

export class GetRoomsService implements IGetAll<object[]>{
	async returninAll(): Promise<object[]> {
		return await PrismaClientInstance.room.findMany({
			include: {
				Task: true
			}
		}) as object[]
	}
}