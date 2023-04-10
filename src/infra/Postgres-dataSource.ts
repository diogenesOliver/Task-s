import { DataSource } from 'typeorm'

const PG_PASS = process.env.POSTGRES_HOST as string
const PG_USERNAME = process.env.POSTGRES_USERNAME as string
const PG_HOST = process.env.POSGRES_PASS as string

const AppDataSource = new DataSource({
    type: "postgres",
    host: PG_HOST,
    port: 5432,
    username: PG_USERNAME,
    password: PG_PASS,
})

export { AppDataSource }