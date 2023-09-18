import { test, expect } from 'vitest'
import { GetTasksService } from '../repositories/GetTasksService'

test('Get all tasks', async () => {
	const getTasks = await new GetTasksService().returninAll()

	if(getTasks.length > 0){
		expect(getTasks[0]).toHaveProperty('title')
	}

	expect(getTasks).toBeTypeOf('object')
})