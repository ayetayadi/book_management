import express from "express";
import { validateSignup } from "../middlewares/validateSignup.js";

const router = express.Router();

router.post("/signup", validateSignup, (req, res) => {
  res.status(201).json({ message: "User signed up successfully" });
});

export default router;
