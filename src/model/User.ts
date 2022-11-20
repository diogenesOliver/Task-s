import { model, Schema } from "mongoose";

const userSchema = new Schema(

    {
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true,
            select: false
        }
    },
    {
        timestamps: true
    }

)

export const UserModel = model('User', userSchema)