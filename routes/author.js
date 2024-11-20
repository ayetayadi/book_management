import express from "express";
import { addAuthor } from "../controllers/author.js";

const router = express.Router();


router.post("/", addAuthor); // POST /api/authors


export default router;
