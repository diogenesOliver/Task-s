import { expect, describe, it } from 'vitest'
import { CreateUserService } from '../../repositories/CreateUserService'
import { dataFromTest } from '../../__test__/mocks/UserDataMock'

const createUserInstance = new CreateUserService()

describe('This is a unity test from createUserService controller function', () => {
    it('Testing that there are all elements in the response', async () => {
        const createUserExec = await createUserInstance.save(dataFromTest)
        const keysArray: string[] = ['id', 'name', 'password', 'confirm_password', 'createdAt', 'updatedAt']
        keysArray.forEach(element => {
            expect(createUserExec).toHaveProperty(element)
        });
    })
})