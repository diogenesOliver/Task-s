import { GetTaskController } from "./GetTasksController";
import { GetTasksService } from "../../repositories/GetTasksService";

export const getTaskInstance = new GetTaskController(
    new GetTasksService()
)