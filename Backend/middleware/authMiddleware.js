import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

const protect = async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      token = token.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await userModel.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

export default protect;
