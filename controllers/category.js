import Category from "../models/Category.js";

// Add a new Category
export const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res
      .status(201)
      .json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(400).json({ message: "Error creating Category", error });
  }
};
