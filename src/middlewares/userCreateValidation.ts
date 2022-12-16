import { body } from "express-validator";

export const userCreateValidation = () => {

    return [

        body('email')
            .isString()
            .isEmail()
            .withMessage('O email inválido')
            .isLength({ min: 20 })
            .withMessage('O email informado é curto de mais'),

        body('password')
            .isString()
            .withMessage('A senha deve ter no mínimo dois caracteres especiais')
            .isLength({ min: 6 })
            .withMessage('A senha informada é curta de mais')
    ]

}