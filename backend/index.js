import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { registerValidation } from "./utils/validations/auth.js";

import { checkAuth } from "./utils/checkAuth.js";
import { authMe, login, register } from "./controllers/userAuthControllers.js";

const PORT = process.env.PORT || 4444;
const app = express();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/local");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

// By Default Node doesnt know how to work with JSON
// This will make req.body read the JSON we are sending from the user
app.use(express.json());
// app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.post("/auth/register", register);

app.post("/auth/login", login);

app.get("/auth/me", checkAuth, authMe);

app.listen(3000, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server OK on port ${3000}`);
});
