import { expect, describe, it } from 'vitest'
import { CreateUserService } from './CreateUserService'
import { dataFromTest } from '../../__test__/mocks/UserDataMock'

const createUserInstance = new CreateUserService()
const keysArray: Array<string> = ['id', 'name', 'password', 'confirm_password', 'createdAt', 'updatedAt']

describe('This is a unity test from createUserService controller function', () => {
	it('Testing that there are all elements in the response', async () => {
		const createUserExec = await createUserInstance.save(dataFromTest)
		keysArray.forEach(element => {
			expect(createUserExec).toHaveProperty(element)
		})
	})
})