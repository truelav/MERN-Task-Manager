import express from "express";

import { checkAuth } from "../utils/checkAuth.js";
import * as PostsControllers from "../controllers/postControllers.js";

const router = express.Router();

router.post("/posts", checkAuth, PostsControllers.create);
router.get("/posts", PostsControllers.getAll);
router.get("/posts/:id", PostsControllers.getOne);
router.delete("/posts/:id", checkAuth, PostsControllers.remove);
router.patch("/posts", checkAuth, PostsControllers.edit);

export default router;
