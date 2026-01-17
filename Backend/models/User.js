// const mongoose = require("mongoose")
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
  },
  { timeStamps: true }
);

let userModel = mongoose.model("userModel", userSchema);
export default userModel;
