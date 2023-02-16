import express from "express";

const router = express.Router();

router.get("/user", (req, res) => {
  res.status(200).json("Hello World");
});

export default router;
