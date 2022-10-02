import { body } from 'express-validator'

export const taskCreateValidation = () => {

    return[

        body('title')
            .isString()
            .withMessage('O título é obrigatório')
            .isLength({  min: 5 })
            .withMessage('O título precisa ter no mínimo 5 caracteres!'),

        body('description')
            .isString()
            .withMessage('A descrição é obrigatória!')
            .isLength({ min: 5 })
            .withMessage('A descrição precisa ter no mínimo 5 caracteres!'),

        body('difficulty')
            .isNumeric()
            .withMessage('O nível de dificuldade precisa ser um número')
            .custom((value: number) => {
                if(value < 0 || value > 10){
                    throw new Error('O nível da dificuldade precisa ser entre 0 e 10')
                }

                return true
            })

    ]

}