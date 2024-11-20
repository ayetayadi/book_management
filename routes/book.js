import express from "express";
import {
  fetchBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  addValidatedBook,
} from "../controllers/book.js";

const router = express.Router();

router.get("/", fetchBooks); // GET /api/books
router.get("/:id", getBookById); // GET /api/books/:id
router.post("/", addBook); // POST /api/books
router.put("/:id", updateBook); // put /api/books/:id
router.delete("/:id", deleteBook); // DELETE /api/books/:id

router.post("/validated", addValidatedBook); // POST /api/books/validated

export default router;
