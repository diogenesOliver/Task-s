import { inject, injectable } from "tsyringe";
import { IUpdateTaskRepository } from "../../repositories/ICreateTaskRepository";

@injectable()
export class UpdateTaskUseCase {

    constructor(
        @inject("UpdateTaskRepository")
        private updateTaskUseCase: IUpdateTaskRepository
    ) { }

    async executeFindByID(id: string): Promise<any> {
        await this.updateTaskUseCase.findTaskById(id)
        return id
    }

    async executeUpdateTask(id: string, data: Object): Promise<any> {
        await this.updateTaskUseCase.updateTask(id, data)
    }

}