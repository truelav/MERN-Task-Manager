import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { registerValidation } from "./utils/validations/auth.js";
import { validationResult } from "express-validator";

const PORT = process.env.PORT || 4444;
const app = express();

console.log(process.env.PORT);

//Connecting to the local MongoDB
// mongoose
//   .connect("" + process.env.DB_CONNECTION_STRING)
//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log("DB connection ", err));

//Or Use the Async Await

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/task_manager_rec");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

// By Default Node doesnt know how to work with JSON
// This will make req.body read the JSON we are sending from the user
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.post("/auth/register", registerValidation, (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  res.status(200).json({ success: true });
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  //creating token when we are signing in
  const token = jwt.sign(
    {
      email: req.body.email,
      name: req.body.name,
    },
    "SecretSecret123"
  );

  res.json({ success: true });
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server OK on port ${3000}`);
});
