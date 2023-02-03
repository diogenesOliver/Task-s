import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

export class HandleValidation {

    validate(req: Request, res: Response, next: NextFunction) {

        const errors = validationResult(req)

        if (errors.isEmpty())
            return next()

        const extratectErrors: Array<any> = []

        errors.array().map((err) => extratectErrors.push({
            [err.param]: err.msg
        }))

        return res.status(422).json({
            errors: extratectErrors
        })

    }

}