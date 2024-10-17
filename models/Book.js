// models/Book.js
import mongoose from "mongoose";

// Define a schema with different types of fields
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
  },
  isBestseller: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: [Number],
  },
  additionalInfo: {
    pages: {
      type: Number,
    },
    publisher: {
      type: String,
    },
  },
  tags: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Book", bookSchema);
