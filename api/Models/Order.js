const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, require: true },
    products: {
      type: [
        {
          title: { type: String, require: true },
          img: { type: String, require: true },
          price: { type: Number, require: true },
          quantity: { type: Number, default: 1 },
        },
      ],
    },
    shippingAddress: { type: Object, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", orderSchema);
