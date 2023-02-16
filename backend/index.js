import express from "express";
import mongoose from "mongoose";
// import dotenv/config

const PORT = process.env.PORT || 3000;
const app = express();

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
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
