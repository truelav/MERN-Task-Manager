import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import allRoutes from "./routes/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(morgan("tiny"));
// MORGAN basically logs into the console all the HTTP requests (tiny is predefined format)
app.use(express.json());
app.use(cookieParser());

// ROUTES
app.use("/api", allRoutes);

//Error Handler
app.use((err, req, res) => {
  const status = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(status).json({ message, stack: err.stack });
});

// DATABASE CONNECTIONS
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DO_CONNECTION_STRING);
    console.log("mongo DB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

app.listen(PORT, () => {
  //   connectDB();
  console.log(`Server is running on port ${PORT}`);
});
