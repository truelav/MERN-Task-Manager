import jwt, { decode } from "jsonwebtoken";

export const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(500).json("Access Token not available");
  }

  jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
    if (error) return res.json("Invalid Token");
    else {
      req.user = decoded;
      return next();
    }
  });
};
