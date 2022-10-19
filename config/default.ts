const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASSWORD

export default{

    port: 8080,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.aqkhdy3.mongodb.net/?retryWrites=true&w=majority`,
    env: "development"

}