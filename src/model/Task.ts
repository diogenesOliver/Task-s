import { model, Schema } from "mongoose";

const taskSchema = new Schema(

    {

        title: { type: String },
        description: { type: String },
        difficulty: { type: Number },
        status: { type: Boolean, default: false }

    },
    {
        timestamps: true
    }

)

export const TaskModel = model('Task', taskSchema)