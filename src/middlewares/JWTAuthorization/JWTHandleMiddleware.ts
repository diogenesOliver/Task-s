import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

class JsonWebTokenHandleMiddleware {

    verifyJWT(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['x-access-token'] as string
        const token = authHeader && authHeader.split(" ")[1]

        console.log(authHeader, token)

        /* const SECRET_KEY = process.env.SECRET as string

        verify(authHeader, SECRET_KEY, (err: any, decode: any) => {
            if (err)
                res.status(403).end()

            decode = req.body
            res.json(decode)
        }) */

        if (!token)
            return res.status(401).json({ msg: "Acesso negado!" })

        verify(token, process.env.SECRET as string)
        next()
    }

}

const jsonWebTokeMiddleware = new JsonWebTokenHandleMiddleware()
export { jsonWebTokeMiddleware }