import { body } from 'express-validator'

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password','Пароль должен быть больше 5 символов').isLength({min: 5}),
    body('fullname','Укажите имя').isLength({min: 3}),
    body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),

];