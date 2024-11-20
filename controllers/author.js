import Author from "../models/author.js";


// Add a new author
export const addAuthor= async (req, res) => {
    try {
      const author = new Author(req.body);
      await author.save();
      res.status(201).json({ message: "Author created successfully",  author });
    } catch (error) {
      res.status(400).json({ message: "Error creating Author", error });
    }
  };

