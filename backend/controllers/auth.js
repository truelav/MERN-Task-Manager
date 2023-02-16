import bcryptjs from "bcryptjs";

import User from "../models/User.js";

export const register = async (req, res) => {
  // check if the fields exist
  //a better practice is validation on front end too
  if (req.body.name || req.body.email || req.body.password) {
    res
      .status(300)
      .json("Missing one of the required fields (name, email, pass)");
    return;
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving new user in the Database
    await newUser.save();
    return res.status(201).json(`${req.body.name} was created with success`);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

export const login = () => {};
