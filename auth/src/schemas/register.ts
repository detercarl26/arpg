import joi from "joi";

export const registerSchema = joi.object({
    username: joi.string()
                 .alphanum()
                 .min(4)
                 .max(12),
    email: joi.string()
              .email(),
    number: joi.string(), // 1. format validation with libphonenumber.
    password: joi.string()
                 .min(8)
                 .max(64)
                 .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
                 .required()
}).or("username", "email", "number")
  .unknown(false);