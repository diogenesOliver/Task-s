import { ICreateUserDTO } from "./CreateUserDTO";
import { UserModel } from "../../model/User";

import Logger from "../../../config/logger";

export class CreateUserUseCase {

    async execute(data: ICreateUserDTO) {

        try {

            const userAlreadyExists = await UserModel.findOne({ email: data.email })

            if (userAlreadyExists)
                throw new Error('User already exists')

            const newUser = new UserModel(data)
            await UserModel.create(newUser)

            console.log(newUser)

        }catch(e: any){
            Logger.error(`Error on System: ${e.message}`)
        }


    }

}