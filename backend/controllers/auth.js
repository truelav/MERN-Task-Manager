import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from "../utils/error.js";
import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json(`${req.body.name} was created with success`);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select({
      name,
      email,
      password,
    });

    if (!user) {
      return res.status(404).json(`User ${req.body.email} was not found`);
    }

    const isPasswordCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(404).json("Password Incorrect");
    }

    const payload = {
      id: user._id,
      name: user.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .cookie("access cookie", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ message: "Login Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
