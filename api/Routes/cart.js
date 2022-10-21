const express = require("express");
const {
  addCartProduct,
  getAllCartProduct,
  getCartProductByuser,
  deleteCartItem,
  increementQuantity,
  decreementQuantity,
} = require("../controller/cart");

const router = express.Router();

// Add product to database
router.post("/add/:productId", addCartProduct);

// Get all product from the datase
router.get("/", getAllCartProduct);

// Get all product by user
router.get("/user", getCartProductByuser);

// Delete product from database
router.delete("/delete/:id", deleteCartItem);

// Increeement cart quantity
router.put("/increement/:id", increementQuantity);

// Decreement cart quantity
router.put("/decreement/:id", decreementQuantity);

module.exports = router;
