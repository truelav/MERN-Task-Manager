import { validationResult } from "express-validator";

export default (req, res, next) => {
  const errors = validationResult(req);

  // Basically if there are any errors then send them to the User
  // Otherwise run the next function

  if (!errors.isEmpty()) {
    console.log(errors.array());

    return res.status(400).json({ message: errors.array() });
  }

  next();
};
