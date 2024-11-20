import mongoose, { Schema } from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Author",
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
});

bookSchema.pre("save", async function (next) {
  const Category = mongoose.model("Category");
  const categoriesExist = await Category.find({
    _id: { $in: this.categories },
  });

  if (categoriesExist.length !== this.categories.length) {
    return next(new Error("Une ou plusieurs catégories sont invalides."));
  }
  next();
});


export default mongoose.model("Book", bookSchema);
