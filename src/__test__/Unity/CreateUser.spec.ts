import 'reflect-metadata'

import { CreateUserService } from '../../repositories/CreateUserService'
import { User } from '@prisma/client'

const dataFromTest: User = {
    id: 100,
    name: "Diógenes Ribeiro de Oliveira",
    email: "diogenes.oliveira@gmail.com",
    password: "senha123123",
    confirm_password: "senha123123",
    createdAt: new Date(),
    updatedAt: new Date()
}

const createUserInstance = new CreateUserService()

describe('This is a unity test from controller function', () => {
    it('Testing save on DataBase function', async () => {
        const createUserExec = await createUserInstance.save(dataFromTest)
        console.log(createUserExec)
    })
})