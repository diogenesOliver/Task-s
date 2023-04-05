import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

class JsonWebTokenHandleMiddleware {

    verifyJWT(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers['authorization'] as string
        const token = authHeader && authHeader.split(" ")[1]

        if (!token)
            return res.status(401).json({ msg: "Acesso negado!" })

        try{
            verify(token, process.env.SECRET as string)
            next()
        }catch(e: any){
            res.status(403).json({
                message: 'Forbiden'
            })
        }
    }

}

const jsonWebTokeMiddleware = new JsonWebTokenHandleMiddleware()
export { jsonWebTokeMiddleware }