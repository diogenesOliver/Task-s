import { Response, Request } from "express"

export async function returningScreen(req: Request, res: Response) {
    res.send('API FUNCIONANDO ATÉ O MOMENTO!!')
}