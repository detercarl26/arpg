import { Router } from "express";

export const registerController = Router();

registerController.post("/auth/v1/register", (req, res) => {
    res.send("Hello World!");
});