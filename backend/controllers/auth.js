import bcryptjs from "bcryptjs";

import User from "../models/User.js";

export const register = async (req, res) => {
  // check if the fields exist
  //a better practice is validation on front end too
  if (req.body.name || req.body.email || req.body.password) {
    res
      .status(300)
      .json("Missing one of the required fields (name, email, pass)");
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const handlePassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User();
  } catch (error) {}
};

export const login = () => {};
