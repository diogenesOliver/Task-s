import { Request, Response } from "express";
import { GetUserService } from "../repositories/GetUsersService";

export class GetUserController {
    constructor(
        private getUserService: GetUserService
    ) { }

    async getUserController(req: Request, res: Response) {
        try {
            const allUsers = await this.getUserService.get()
            res.status(200).send(allUsers)

            return {
                statusCode: 200,
                body: allUsers
            }
        }catch(e){ console.log(e) }
    }
}