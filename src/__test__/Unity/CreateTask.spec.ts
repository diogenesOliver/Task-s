import 'reflect-metadata'

import { CreateTaskService } from '../../repositories/CreateTaskService'
import { Task } from '@prisma/client'
import { dataFromTest } from './CreateUser.spec'

const ID_RANDOM: number = Math.floor(Math.random() * 1000)
const STRING_RANDOM: string = Math.random().toString(36).slice(2)

let tasksFromTests: Task = {
    authorId: dataFromTest.id,
    id: ID_RANDOM,
    title: `Title from test: ${STRING_RANDOM}`,
    description: "Description from test",
    status: false,
    difficulty: 9,
    createdAt: new Date(),
    updatedAt: new Date()
}

const createTaskServiceInstance = new CreateTaskService()

describe('This is a unity test from createTaskController function', () => {
    it('Testing that there are all elements in the response', async () => {
        const createTaskExec = await createTaskServiceInstance.save(tasksFromTests)
        const keysArray: string[] = ['id', 'title', 'description', 'difficulty', 'status', 'authorId', 'createdAt', 'updatedAt']
        keysArray.forEach(element => {
            expect(createTaskExec).toHaveProperty(element)
        })
    })
})