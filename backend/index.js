import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import {
  createPostValidation,
  registerValidation,
} from "./utils/validations.js";

import { checkAuth } from "./utils/checkAuth.js";
import * as AuthControllers from "./controllers/userAuthControllers.js";
import * as PostsControllers from "./controllers/postControllers.js";

const PORT = process.env.PORT || 4444;
const app = express();

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "uploads");
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/local");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

// By Default Node doesnt know how to work with JSON
// This will make req.body read the JSON we are sending from the user
app.use(express.json());
// app.use(cors);

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.post("/auth/register", registerValidation, AuthControllers.register);
app.post("/auth/login", AuthControllers.login);
app.get("/auth/me", checkAuth, AuthControllers.authMe);

app.post("/post", upload.single("image"), (req, res) => {
  res.status(202).json({
    url: `/uploads/${req.file.originalname}`,
  });
});

app.post("/posts", checkAuth, PostsControllers.create);
app.get("/posts", PostsControllers.getAll);
app.get("/posts/:id", PostsControllers.getOne);
app.delete("/posts", checkAuth, PostsControllers.remove);
// app.patch("/posts", checkAuth, PostsControllers.edit);

app.listen(3000, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server OK on port ${3000}`);
});
