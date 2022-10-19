const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: { type: String, require: true },
    userId: { type: String, require: true },
    rating: { type: Number, require: true, default: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
