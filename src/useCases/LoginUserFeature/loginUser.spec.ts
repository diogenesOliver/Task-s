import 'reflect-metadata'
import request from 'supertest'

import { app } from '../../main'
import { it, expect, test, describe } from 'vitest'

describe('Testing error cases for the /user/sign-up route', () => {
	test('Should return 404 error if request body is empty', async () => {
		const response = await request(app)
			.post('/user/sign-up')
			.send({})
		expect(response.statusCode).toEqual(404)
	})

	it('Should returna a error if authorization Toke not provide', async () => {
		const response = await request(app)
			.post('/user/sign-up')
			.send({
				'email': 'diogenes.riboliveira@gmail.com',
				'password': 'S@@alada390390'
			})
		console.log(response)
	})
})