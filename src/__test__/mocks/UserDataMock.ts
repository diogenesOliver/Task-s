import { User } from '@prisma/client'

const STRING_RANDOM: string = Math.random().toString(36).slice(2)

export const dataFromTest: User = {
	id: 'pa$$word-crypt' + STRING_RANDOM,
	name: 'Diógenes Ribeiro de Oliveira',
	email: `${STRING_RANDOM}.oliveira@gmail.com`,
	password: 'senha123123',
	confirm_password: 'senha123123',
	createdAt: new Date(),
	updatedAt: new Date()
}