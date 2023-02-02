import { inject, injectable } from "tsyringe";
import { IRemoveTaskRepository } from "../../repositories/ICreateTaskRepository";

@injectable()
export class RemoveTaskUseCase {

    constructor(
        @inject("RemoveTaskRespository")
        private removeTaskUseCase: IRemoveTaskRepository
    ) { }

    async executeFindByID(id: string): Promise<any> {
        await this.removeTaskUseCase.findTaskById(id)
        return id
    }

    executeRemoveTask(id: string) {
        this.removeTaskUseCase.deleteTask(id)
    }

}