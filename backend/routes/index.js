import express from "express";

// import handleValidationErrors from "../utils/handleValidationErrors.js";

// import {
//   createPostValidation,
//   loginValidation,
//   registerValidation,
// } from "../utils/validations.js";

import authRoutes from "./auth.js";
import taskRoutes from "./tasks.js";
import usersRoutes from "./users.js";
import postsRoutes from "./posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/tasks", checkAuth, taskRoutes);
router.use("/users", checkAuth, usersRoutes);
router.use("/posts", postsRoutes);

export default router;
