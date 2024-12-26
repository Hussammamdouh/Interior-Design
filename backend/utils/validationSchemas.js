const Joi = require('joi');

// Registration Schema
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

// Login Schema
const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Inventory Item Schema
const inventoryItemSchema = Joi.object({
  name: Joi.string().required(),
  type: Joi.string().required(),
  price: Joi.number().required(),
  modelPath: Joi.string().required(),
  description: Joi.string().optional(),
});

// Design Schema
const designSchema = Joi.object({
  roomType: Joi.string().required(),
  style: Joi.string().required(),
  measurements: Joi.object().required(),
  notes: Joi.string().optional(),
  designFile: Joi.string().optional(),
});

// Update Profile Schema
const updateProfileSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().optional(),
});

const orderSchema = Joi.object({
  items: Joi.array()
    .items(
      Joi.object({
        itemId: Joi.string().required(),
        quantity: Joi.number().required(),
        price: Joi.number().required(),
      })
    )
    .required(),
  total: Joi.number().required(),
});

module.exports = {
  registerSchema,
  loginSchema,
  inventoryItemSchema,
  designSchema,
  updateProfileSchema, // Newly added schema
  orderSchema,
};
