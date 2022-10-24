const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    sellerId: { type: String, require: true },
    products: {
      title: { type: String, require: true },
      img: { type: String, require: true },
      price: { type: Number, require: true },
      quantity: { type: Number, default: 1 },
    },
    shippingAddress: { type: Object, require: true },
    deleveryStatus: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", orderSchema);
