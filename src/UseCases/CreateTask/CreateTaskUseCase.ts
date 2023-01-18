import { ICreateTaskRepository } from "../../repositories/ICreateTaskRepository";
import { TaskEntitie } from "../../entities/Tasks";

import { inject, injectable } from "tsyringe";

@injectable()
export class CreateTaskUseCase{

    constructor(
        @inject("CreateTaskRepository")
        private  createTaskRepository: ICreateTaskRepository
    ){}

    async execute(data: TaskEntitie){
        this.createTaskRepository.save(data)
    }

}