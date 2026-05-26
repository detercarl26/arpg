import { Router } from "express";
import { registerSchema } from "../schemas/register.ts";
import User from "../models/User.ts"

export const registerController = Router();

registerController.post("/auth/v1/register", async (req, res, next) => {
    try {
        res.locals = { body: await registerSchema.validateAsync(req.body)};
    } catch (err) {
        return res.status(500)
                  .send(err)
    };

    try {
        const {
            username,
            emailAddress,
            phoneNumber,
            password
        } = res.locals.body;

        // check if user already exists.
    } catch (err) {

    }

    const user = await User.create(res.locals.body);

    res.send(user);
});