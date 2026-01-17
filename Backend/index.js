import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
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
app.use(cors({
  origin :"http://localhost:5173",
  credentials:true
}));


app.use("/", authRoutes);

app.listen(9999, () => {
  console.log("server started!");
});
