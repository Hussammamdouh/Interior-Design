const Joi = require('joi');

const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  confirmPassword: Joi.any().valid(Joi.ref('password')).required().messages({
    'any.only': 'Passwords must match',
  }),
  phone: Joi.string().required(),
  role: Joi.string().valid('customer', 'admin', 'designer'),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const inventoryItemSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  modelPath: Joi.string().required(),
  description: Joi.string().optional(),
});

const designSchema = Joi.object({
  roomType: Joi.string().required(),
  style: Joi.string().required(),
  measurements: Joi.object().required(),
  notes: Joi.string().optional(),
  designFile: Joi.string().optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  inventoryItemSchema,
  designSchema,
};
