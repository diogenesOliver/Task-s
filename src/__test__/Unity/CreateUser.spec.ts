import 'reflect-metadata'

import { CreateUserService } from '../../repositories/CreateUserService'
import { User } from '@prisma/client'

const EMAIL_RANDOM: string = Math.random().toString(36).slice(2)
const ID_RANDOM: number = Math.floor(Math.random() * 1000)

export let dataFromTest: User = {
    id: ID_RANDOM,
    name: "Diógenes Ribeiro de Oliveira",
    email: `${EMAIL_RANDOM}.oliveira@gmail.com`,
    password: "senha123123",
    confirm_password: "senha123123",
    createdAt: new Date(),
    updatedAt: new Date()
}

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