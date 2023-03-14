import express from "express";

import * as PostsControllers from "../controllers/postControllers.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";
import { checkAuth } from "../utils/checkAuth.js";

import {
  createPostValidation,
  loginValidation,
  registerValidation,
} from "./utils/validations.js";

const router = express.Router();

app.post("/posts", checkAuth, PostsControllers.create);
app.get("/posts", PostsControllers.getAll);
app.get("/posts/:id", PostsControllers.getOne);
app.delete("/posts", checkAuth, PostsControllers.remove);
app.patch("/posts", checkAuth, PostsControllers.edit);

export default router;
