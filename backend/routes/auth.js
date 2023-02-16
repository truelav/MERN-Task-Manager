import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

// So instead of having a callback function here
// We will create a controller function for register
router.post("/register", register);

router.get("/login", login);

export default router;
