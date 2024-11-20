import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoutes from "./routes/book.js";
import authorRoutes from "./routes/author.js";
import categoryRoutes from "./routes/category.js";
import authRoutes from "./routes/auth.js";
import eventRoutes from "./routes/event.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);

export default app;
