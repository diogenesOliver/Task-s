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

describe('Password compatibility', () => {
    it('Check if the password matches confirm_password', async () => {
        dataFromTest.password = "SENHA123"
        dataFromTest.id = Math.floor(Math.random() * 1000)
        dataFromTest.email = `${Math.random().toString(36).slice(2)}.ribeiro@gmail.com`

        const createUserExec = await createUserInstance.save(dataFromTest)
        expect(createUserExec.password)
            .not
            .toEqual(createUserExec.confirm_password)
    })
})