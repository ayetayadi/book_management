import mongoose, { Schema } from "mongoose";

const categorySchema =new mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ["Mystery", "Horror", "Romance", "Drama"]
  }
});

export default mongoose.model("Category", categorySchema);
