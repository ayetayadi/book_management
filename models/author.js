import mongoose, { Schema } from "mongoose";

const authorSchema =new mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Nationality: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Author", authorSchema);
