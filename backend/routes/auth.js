import express from "express";

import * as AuthControllers from "../controllers/userAuthControllers.js";
import { checkAuth } from "../utils/checkAuth.js";
import handleValidationErrors from "../utils/handleValidationErrors.js";
import { loginValidation, registerValidation } from "../utils/validations.js";

const router = express.Router();

// So instead of having a callback function here
// We will create a controller function for register
// router.post("/register", register);
// router.get("/login", login);

router.post(
  "/register",
  registerValidation,
  handleValidationErrors,
  AuthControllers.register
);
router.post(
  "/login",
  loginValidation,
  handleValidationErrors,
  AuthControllers.login
);
router.get("/me", checkAuth, AuthControllers.authMe);

export default router;
