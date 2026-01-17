import userModel from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs";

const signUpUser = async (req, res) => {
  let { name, email, password } = req.body;
  const userExist =await userModel.findOne({ email });

  if (userExist) {
    res.status(400).json({ message: "User already exists" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  let user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  const token = generateToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  res.status(201).json({
    id: user._id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  });
};

export default signUpUser;

