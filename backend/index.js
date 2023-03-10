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
import { checkAuth } from "./utils/checkAuth.js";

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

    const userPayload = {
      _id: newUser._id,
    };

    await newUser.save();

    const token = jwt.sign(userPayload, "secret123", {
      expiresIn: "1d",
    });

    res.status(201).json(`${req.body.name} was created with success`);
  } catch (error) {
    res.status(500).json({
      message: "Could not register user",
    });
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    // console.log(user);

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json("Password or Email Incorrect");
    }

    const userPayload = {
      id: user._doc._id,
    };

    const token = jwt.sign(userPayload, "secret123", { expiresIn: "1d" });

    res.status(200).json({ message: "Login Successful", token });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server OK on port ${3000}`);
});
