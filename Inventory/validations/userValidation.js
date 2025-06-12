import Joi from 'joi';

export const userCreateSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  role: Joi.string().valid("admin", "customer", "staff").default("staff"),
  status: Joi.string().valid("Active", "Inactive").default("Active"),
  password: Joi.string().min(6).required(),
});

export const userUpdateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  role: Joi.string().valid("admin", "customer", "staff").optional(),
  status: Joi.string().valid("Active", "Inactive").optional(),
  password: Joi.string().min(6).optional(),
});
