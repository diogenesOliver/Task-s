import 'reflect-metadata'
import request from 'supertest'

import { app } from '../../main'
import { describe, it, expect } from 'vitest'

describe('Create User Controller', () => {
	it('Cannot create user with empty body', async () => {
		const response = await request(app)
			.post('/register')
			.send()

		expect(response.status).toEqual(404)
	})
})