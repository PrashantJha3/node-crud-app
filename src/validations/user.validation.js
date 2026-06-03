const Joi = require("joi");

const createUserSchema = Joi.object({
  name: Joi.string().required(),

  email: Joi.string().email().required(),

  age: Joi.number().optional(),
});

module.exports = {
  createUserSchema,
};