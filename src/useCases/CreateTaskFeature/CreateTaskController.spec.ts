import 'reflect-metadata'
import request from 'supertest'

import { app } from '../../main'
import { describe, it, expect } from 'vitest'

describe('Create Task Controller', () => {
	it('Cannot create a task with empty body', async () => {
		const response = await request(app)
			.post('/create/task')
			.send()

		expect(response.status).toEqual(404)
	})
})