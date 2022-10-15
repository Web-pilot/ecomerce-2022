const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    text: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
