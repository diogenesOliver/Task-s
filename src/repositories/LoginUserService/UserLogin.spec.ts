import { expect, test, describe } from 'vitest'
import { UserLoginService } from './LoginUserService'

const userData = new UserLoginService()

describe('Testing the RepositoryClass for user login functionality',() => {
	test('Validating whether the instance is of type Object and returns an object with user data', async () => {
		const userLogginIn = await userData.findData('oliveira.riboliveira@gmail.com')

		expect(userLogginIn).toBeInstanceOf(Object)
		expect(userLogginIn).toHaveProperty('name')
	})

	test('Should return an error if the users email is not found', () => {
		return expect(async () => {
			await userData.findData('')
		}).rejects.toThrow('User not found')
	})
})