import { expect, test } from "vitest";
import { User } from './UserEntitie'

let dataFromTests = {
    name: "Jhon Doe",
    email: "jhon.doe@gmail.com",
    password: "SENHA123",
    confirm_password: "SENHA123",
    createdAt: new Date(),
    updatedAt: new Date()
}

test('Create an User', () => {
    const user = new User(dataFromTests)
    expect(user).toBeInstanceOf(User)
})

test('Cannot create a user if password and confirm_password do not match', () => {
    expect(() => {
        dataFromTests.password = 'SENHA12'
        return new User(dataFromTests)
    }).throw()
})