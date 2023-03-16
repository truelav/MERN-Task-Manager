import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import allRoutes from "./routes/index.js";

const PORT = process.env.PORT || 4444;
const app = express();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/local");
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }
};

//        MIDLLEWARE
app.use(express.json());
app.use(morgan("tiny"));
app.use(cors());

//        ROUTES
app.use("/api", allRoutes);
app.use("/uploads", express.static("uploads"));
app.get("/", (req, res) => res.send("Hello World vasilica"));

app.listen(3000, (err) => {
  if (err) return console.log(err);
  connectDB();
  console.log(`Server OK on port ${3000}`);
});
