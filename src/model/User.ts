import { model, Schema } from "mongoose";

const userSchema = new Schema(

    {
        email: { type: String },
        password: { type: String },
        name: { type: String },
        age: { type: Number },
    }

)

export const UserModel = model('User', userSchema)