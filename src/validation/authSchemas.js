import Joi from 'joi';

const authErrorMessages = {
  'string.base': 'Field {#label} must be a string.',
  'string.empty': 'Field {#label} cannot be empty.',
  'string.email': 'Field {#label} must be a valid email address.',
  'string.pattern.base': 'Field {#label} must be in the format 000-000-00-00',
  'object.min': 'missing fields',
  'any.required': 'missing required {#label} field',
};

export const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email(),
  password: Joi.string().required(),
}).messages(authErrorMessages);

export const loginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required(),
}).messages(authErrorMessages);
