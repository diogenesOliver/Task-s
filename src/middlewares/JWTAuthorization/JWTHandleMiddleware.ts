import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

class JsonWebTokenHandleMiddleware {

    verifyJWT(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['x-access-token'] as string
        const token = authHeader && authHeader.split(" ")[1]

        if(!token)
            return res.status(401).json({ msg: "Acesso negado!" })

        try{
            const SECRET = process.env.SECRET
            verify(token, SECRET as string)
            next()
        }catch(err){
            res.status(401).json({
                msg: 'TOKEN invalid'
            })
        }
    }

}

const jsonWebTokeMiddleware = new JsonWebTokenHandleMiddleware()
export { jsonWebTokeMiddleware }