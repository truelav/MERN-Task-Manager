import express from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

// By Default Node doesnt know how to work with JSON
// This will make req.body read the JSON we are sending from the user
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.post("/auth/login", (req, res) => {
  console.log(req.body);

  //creating token when we are signing in
  const token = jwt.sign(
    {
      email: req.body.email,
      name: req.body.name,
    },
    "SecretSecret123"
  );

  res.json({ success: true });
});

app.listen(3000, (err) => {
  if (err) return console.log(err);

  console.log(`Server OK on port ${3000}`);
});
