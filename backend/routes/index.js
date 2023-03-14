import express from "express";

import authRoutes from "./auth.js";
import postsRoutes from "./posts.js";
import uploadRotes from "./uploads.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/posts", postsRoutes);
router.use("/upload", uploadRotes);

export default router;
