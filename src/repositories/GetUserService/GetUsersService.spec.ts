import { expect, describe, test } from 'vitest'
import { GetUserService } from './GetUsersService'

const INVALID_USER_ID: string = 'cltizhjln0000w8n4tgy38skjakjsndkjasndjkasnd'
const VALID_USER_ID: string = 'cltizhjln0000w8n4tgy38skj'

const findUserById = new GetUserService()

describe('Testing the functionality to search for a user by ID', () => {
	test('If user ID not found, return a ERROR', async () => {
		expect(await findUserById.get(INVALID_USER_ID))
			.toEqual(null)
	})

	test('Should return a instance type Object', async () => {
		expect(await findUserById.get(VALID_USER_ID))
			.toBeInstanceOf(Object)
	})

	test('Should have a field Task on object', async () => {
		expect(await findUserById.get(VALID_USER_ID))
			.toHaveProperty('Task')
	})
})
