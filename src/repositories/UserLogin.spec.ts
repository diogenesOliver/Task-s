import { expect, test } from 'vitest'
import { UserLoginService } from './LoginUserService'

const userData = new UserLoginService()

test('User logging in', async () => {
	const userLogginIn = await userData.findData('diogenes.riboliveira@gmail.com')

	expect(userLogginIn).toBeTypeOf('object')
	expect(userLogginIn).toHaveProperty('name')
})

test('Cannot login on the system with invalid email', () => {
	expect(async () => {
		return await new UserLoginService().findData('asjhkdkasjdh.riboliveira@gmail.com')
	}).rejects.toThrow()
})