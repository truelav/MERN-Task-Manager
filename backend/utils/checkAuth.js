import jwt from "jsonwebtoken";
// import createError from "./error.js";

export const checkAuth = (req, res, next) => {
  const token = (req.headers.authorization || "").substring(7);
  if (!token) {
    return res
      .status(401)
      .json({ message: "You have no authorization for this" });
  }
  const decoded = jwt.verify(token, "secret123");
  req.id = decoded.id;

  next();
};
