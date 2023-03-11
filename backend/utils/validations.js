import { body } from "express-validator";

export const registerValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("name").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];

export const loginValidation = [
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),
  body("name").isLength({ min: 3 }),
  body("avatarUrl").optional().isURL(),
];

export const createPostValidation = [
  body("title").isLength({ min: 5 }).isString(),
  body("postBody").isLength({ min: 15 }).isString(),
  body("tags").optional().isString(),
  body("imageUrl").optional().isURL(),
];
