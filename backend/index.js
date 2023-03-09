import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World vasilica");
});

app.listen(3000, (err) => {
  if (err) return console.log(err);

  console.log(`Server OK on port ${3000}`);
});
