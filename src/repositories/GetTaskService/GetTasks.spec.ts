import { test, expect, describe } from 'vitest'
import { GetTasksService } from './GetTasksService'

describe('Testing class that return all tasks on Database', () => {
	test('Must return an empty taks array or with tasks', async () => {
		const returnAllTasks = await new GetTasksService().returninAll()
		
		if(returnAllTasks.length > 0){
			expect(returnAllTasks[0]).toHaveProperty('title')
		}

		expect(returnAllTasks).toBeInstanceOf(Array<GetTasksService>)
	})
})