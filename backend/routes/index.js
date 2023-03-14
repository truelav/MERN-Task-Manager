import express from "express";

import authRoutes from "./auth.js";
import postsRoutes from "./posts.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);

export default router;
