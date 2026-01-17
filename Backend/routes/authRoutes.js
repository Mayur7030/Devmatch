// const express = require("express");
// const userLogin = require("../controller/loginController");

import express from "express"
import userLogin from "../controller/loginController.js";

const router = express.Router();
router.post("/login", userLogin);

export default router;
