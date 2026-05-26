import joi from "joi";

export const registerSchema = joi.object({
    username: joi.string()
                 .alphanum()
                 .min(4)
                 .max(12)
                 .lowercase()
                 .when("emailAddress", {
                    is: "",
                    then: joi.when("phoneNumber", {
                        is: "",
                        then: joi.required()
                    })
                 }),
    password: joi.string()
                 .min(8)
                 .max(64)
                 .required()
});