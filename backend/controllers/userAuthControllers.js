import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { validationResult } from "express-validator";
import createError from "../utils/error.js";

export const register = async (req, res) => {
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
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(403).json("Password or Email Incorrect");
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
};

export const authMe = async (req, res) => {
  try {
    const user = await User.findById(req.id);

    res.status(200).json({ message: "Success", user });
  } catch (error) {
    res.status(404).json({ message: "User not found", error });
  }
};
