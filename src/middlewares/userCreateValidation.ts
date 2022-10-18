import { body } from "express-validator";

export const userCreateValidation = () => {

    return [

        body('email')
            .isString()
            .withMessage('O email inválido')
            .isLength({ min: 20 })
            .withMessage('O email informado é curto de mais'),

        body('password')
            .isString()
            .withMessage('A senha deve ter no mínimo dois caracteres especiais')
            .isLength({ min: 10 })
            .withMessage('A senha informada é curta de mais'),

        body('name')
            .isString()
            .withMessage('Nome inválido')
            .isLength({ min: 5 })
            .withMessage('O nome informado é curto de mais'),

        body('age')
            .isNumeric()
            .withMessage('A idade informada é inválida')
    ]

}