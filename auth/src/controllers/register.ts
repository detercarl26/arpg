import { Router } from "express";
import { registerSchema } from "../schemas/register.ts";
import bcrypt from "bcrypt";
import User from "../models/User.ts"

import { checkUserExists } from "../middleware/checkUserExists.ts";
export const registerController = Router();

registerController.post("/auth/v1/register", async (req, res, next) => {
    try {
        res.locals = { body: await registerSchema.validateAsync(req.body)};
    } catch (err) {
        return res.status(500)
                  .send(err)
    };

    const {
        username,
        password
    } = res.locals.body;

    await checkUserExists(req, res, next);

    try {
        res.locals.body.password = bcrypt.hashSync(password, 8);
        res.locals.body.verification.code.value = "102421"; // 1. Generate random string.
    } catch (err) {

    }

    if(username) res.locals.body.username = username.toLowerCase()
    
    const user = await User.create(res.locals.body);

    res.send("Successfully registed!");
});