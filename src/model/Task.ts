import { model, Schema } from "mongoose";

export interface ITaskModel {
    title: string,
    description: string,
    difficulty: number,
    status: boolean,
}

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