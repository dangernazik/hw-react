import Joi from "joi";

const carValidator = Joi.object({
      brand: Joi.string().required().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/),
      price: Joi.number().required().min(0).max(1000000),
      year: Joi.number().required().min(1990).max(new Date().getFullYear()).required()
})

export {carValidator}