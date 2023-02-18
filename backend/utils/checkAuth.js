import jwt from "jsonwebtoken";
import createError from "./error.js";

export const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return createError({ status: 401, message: "Unauthorized" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return res.json("Invalid Token");
    else {
      req.user = decoded;
      return next();
    }
  });
};
