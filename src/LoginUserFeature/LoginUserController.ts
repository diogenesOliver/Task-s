import { Request, Response } from "express";
import { UserLoginService } from "../repositories/LoginUserService";
import { User } from "@prisma/client";

export class UserLoginController {
    constructor(
        private userLoginService: UserLoginService
    ) { }

    async virifyEmailInDatabase(req: Request, res: Response) {
        try {
            const inputData: User = req.body
            const findEmail = await this.userLoginService.findData(inputData.email)

            if (findEmail == null || inputData.password != findEmail.password)
                res.status(404).json({ msg: "ERROR on password Or Email" })

            res.status(404).send(findEmail)
            
        } catch (e: any) { console.log(e) }
    }
}