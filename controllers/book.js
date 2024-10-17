// controllers/book.js
import Book from "../models/Book.js";

// Fetch all books
export const fetchBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ books, message: "Books retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error });
  }
};

// Fetch a single book by ID
export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ book, message: "Book retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error });
  }
};

// Add a new book
export const addBook = async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json({ message: "Book created successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error });
  }
};

// Update a book by ID
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", book });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error });
  }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error });
  }
};
