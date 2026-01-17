import express from "express";
import login from "../controller/loginController.js";
import signUpUser from "../controller/signUpController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/login",login);
router.post("/signup", signUpUser);

export default router;
