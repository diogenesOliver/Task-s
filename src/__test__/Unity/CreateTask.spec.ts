import 'reflect-metadata'

import { CreateTaskService } from '../../repositories/CreateTaskService'
import { tasksFromTests } from '../mocks/TasksDataMock'

const createTaskServiceInstance = new CreateTaskService()

describe('This is a unity test from createTaskService function', () => {
    it('Testing that there are all elements in the response', async () => {
        const createTaskExec = await createTaskServiceInstance.save(tasksFromTests)
        const keysArray: string[] = ['id', 'title', 'description', 'difficulty', 'status', 'authorId', 'createdAt', 'updatedAt']
        keysArray.forEach(element => {
            expect(createTaskExec).toHaveProperty(element)
        })
    })
})