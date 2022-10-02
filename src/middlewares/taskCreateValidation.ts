import { body } from 'express-validator'

export const taskCreateValidation = () => {

    return[

        body('title')
            .isString()
            .withMessage('O título é obrigatório')
            .isLength({  min: 5 })
            .withMessage('O título precisa ter no mínimo 5 caracteres!')

    ]

}