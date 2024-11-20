import express from "express";
import { addCategory } from "../controllers/category.js";

const router = express.Router();


router.post("/", addCategory); // POST /api/categories


export default router;
