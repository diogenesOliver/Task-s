import { expect, test } from "vitest";
import { User } from './UserEntitie'

test('Create an User', () => {
    const user = new User({
        name: "Jhon Doe",
        email: "jhon.doe@gmail.com",
        password: "SENHA123",
        confirm_password: "SENHA123",
        createdAt: new Date(),
        updatedAt: new Date()
    })

    expect(user).toBeInstanceOf(User)
})

test('Cannot create an user if password and confirm_password not match', () => {
    expect(() => {
        return new User({
            name: "Jhon Doe",
            email: "jhon.doe@gmail.com",
            password: "SENHA12",
            confirm_password: "SENHA123",
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }).throw()
})