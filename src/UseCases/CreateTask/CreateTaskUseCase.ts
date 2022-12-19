import { ICreateTaskDTO } from "./CreateTaskDTO";
import { TaskModel } from "../../model/Task";

import Logger from "../../../config/logger";

export class CreateTaskUseCase{

    async execute(data: ICreateTaskDTO){

        try{

            await TaskModel.create(data)

        }catch(e: any){
            Logger.error(`Error on system ${e}`)
        }

    }

}