import express from "express";
import multer from "multer";
import { checkAuth } from "../utils/checkAuth.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file);
  },
});
const upload = multer({ storage });

// also need to check what kind of files can be uploaded

router.post("/upload", checkAuth, upload.single("image"), (req, res) => {
  try {
    res.status(202).json({
      url: `/uploads/${req.file.originalname}`,
    });
  } catch (error) {
    console.log(error);
    res.status(405).json({ message: error });
  }
});

export default router;
