import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { registerValidation } from "./utils/validations/auth.js";
import { validationResult } from "express-validator";

import User from "./models/User.js";

const PORT = process.env.PORT || 4444;
const app = express();

//Connecting to the local MongoDB
// mongoose
//   .connect("" + process.env.DB_CONNECTION_STRING)
//   .then(() => console.log("Connected to DB"))
//   .catch((err) => console.log("DB connection ", err));

//Or Use the Async Await

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

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.post("/auth/register", registerValidation, async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  const { email, password, name, avatarUrl } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    email,
    password: hashedPassword,
    name,
    avatarUrl,
  });

  await newUser.save();
});

app.post("/auth/login", (req, res) => {
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
