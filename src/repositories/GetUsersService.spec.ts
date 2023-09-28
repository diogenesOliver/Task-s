import { expect, describe, it, test } from 'vitest'
import { GetUserService } from './GetUsersService'

const findUserById = new GetUserService()

test('Get one user by id and verify typeof', async () => {
	expect(
		await findUserById.get(57)
	).toBeTypeOf('object')
})

test('Verifying if have property name', async () => {
	expect(
		await findUserById.get(57)
	).toHaveProperty('name')
})
