import { expect, it, describe } from 'vitest'
import { DeleteTaskService } from './DeletTaskRepository'

const deleteTaskServiceInstance = new DeleteTaskService()

describe('This is a unity test from DeleteTaskService', () => {
	it('Testing if return a task', async () => {
		const deleteTask = await deleteTaskServiceInstance.get(7)
		console.log(deleteTask)
	})
})