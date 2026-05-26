import mongoose from "mongoose";
import express from "express";

const app = express();
const port: number = 3000;

app.get("/auth/v1/register", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Infinite Domain api is listening on port ${port}`)
});