import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const connectDB = async () => {
  try {
    console.log(process.env);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Database connection failed!", error.message);
    process.exit(1);
  }
};
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", authRoutes);

// app.post("/login", (req, res) => {
//   res.send("client connected to server");
// });

app.listen(9999, () => {
  console.log("server started!");
});
