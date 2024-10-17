// routes/book.js
import express from "express";
import {
  fetchBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/book.js";

const router = express.Router();

// Routes for book management
router.get("/", fetchBooks); // GET /api/books
router.get("/:id", getBookById); // GET /api/books/:id
router.post("/", addBook); // POST /api/books
router.put("/:id", updateBook); // put /api/books/:id
router.delete("/:id", deleteBook); // DELETE /api/books/:id

export default router;
