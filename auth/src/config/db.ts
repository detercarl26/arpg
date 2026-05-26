import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "../../.env"
});

const app = express();
const port: number = 3000;

if(!process.env.MONGO_URI) throw new Error("env.MONGO_URI cannot be null or undefined!");

mongoose.connect(process.env.MONGO_URI);

app.listen(port, () => {
    console.log(`Infinite Domain api is listening on port ${port}`)
});