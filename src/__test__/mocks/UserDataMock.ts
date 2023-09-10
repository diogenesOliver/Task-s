import { User } from "@prisma/client"

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