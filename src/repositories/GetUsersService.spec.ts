import { expect, describe, it, test } from 'vitest'
import { GetUserService } from './GetUsersService'

const findUserById = new GetUserService()
const userIdExemple: number = 3 

test('Get one user by id and verify typeof', async () => {
	expect(
		await findUserById.get(userIdExemple)
	).toBeTypeOf('object')
})

test('Verifying if have property name', async () => {
	expect(
		await findUserById.get(userIdExemple)
	).toHaveProperty('name')
})
