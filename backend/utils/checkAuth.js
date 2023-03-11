import jwt from "jsonwebtoken";
// import createError from "./error.js";

// export const checkAuth = (req, res, next) => {
//   const token = req.cookies.access_token;
//   if (!token) {
//     return next(createError({ status: 401, message: "Unauthorized" }));
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//     if (error) {
//       return next(createError({ status: 401, message: "Invalid Token" }));
//     } else {
//       req.user = decoded;
//       return next();
//     }
//   });
// };

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
