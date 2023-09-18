import { Task } from '@prisma/client'
import { dataFromTest } from './UserDataMock'

const ID_RANDOM: number = Math.floor(Math.random() * 1000)
const STRING_RANDOM: string = Math.random().toString(36).slice(2)

export const tasksFromTests: Task = {
	authorId: dataFromTest.id,
	id: ID_RANDOM,
	title: `Title from test: ${STRING_RANDOM}`,
	description: 'Description from test',
	status: false,
	difficulty: 9,
	createdAt: new Date(),
	updatedAt: new Date()
}