// const User = require("../models/User")
import userModel from "../models/User.js"

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "login successfully" });
  } else {
    return res.status(404).json({ message: "please create account first" });
  }
};

export default userLogin;
