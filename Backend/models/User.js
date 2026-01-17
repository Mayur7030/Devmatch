import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
  },
  { timestamps: true }
);

let userModel = mongoose.model("userModel", userSchema);

export default userModel;


