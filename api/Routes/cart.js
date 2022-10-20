const express = require("express");
const {
  addCartProduct,
  getAllCartProduct,
  getCartProductByuser,
  deleteCartItem,
} = require("../controller/cart");

const router = express.Router();

// Add product to database
router.post("/add", addCartProduct);

// Get all product from the datase
router.get("/", getAllCartProduct);

// Get all product by user
router.get("/user", getCartProductByuser);

// Delete product from database
router.delete("/delete/:id", deleteCartItem);

module.exports = router;
