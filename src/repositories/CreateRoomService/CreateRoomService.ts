import { Room } from '@prisma/client'
import { ISaveFunctionGeneric, PrismaClientInstance } from '../GenericRepository'

export class CreateRoomService implements ISaveFunctionGeneric<Room> {
	async save(data: any): Promise<Room> {
		await PrismaClientInstance.room.create({
			data: data
		})

		return data
	}
}