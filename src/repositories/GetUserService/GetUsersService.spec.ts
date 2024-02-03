import { expect, describe, it, test } from 'vitest'
import { GetUserService } from './GetUsersService'

const userIdExemple: number = 3
const findUserById = new GetUserService().get(userIdExemple)

describe('Testing the functionality to search for a user by ID', () => {
	test('If user ID not found, return a ERROR', async () => {
		expect(await findUserById).toEqual(null)
	})
})
