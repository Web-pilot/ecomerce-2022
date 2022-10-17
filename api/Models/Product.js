const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
    img: { type: String, require: true },
    price: { type: String, require: true },
    userId: { type: String, require: true },
    categories: [],
    desc: { type: String },
    sizes: [],
    inStock: { type: Boolean, default: true },
    reviews: { type: Number, default: 0 },
    totalItemSold: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
