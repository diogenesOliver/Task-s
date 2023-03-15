import { model, Schema } from "mongoose";

export interface IUserModel{
    email: string,
    password: string
}

const userSchema = new Schema<IUserModel>(

    {
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }

)

const User = model<IUserModel>('User', userSchema)

export { User }