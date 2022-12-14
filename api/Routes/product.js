const express = require("express");
const {
  addProduct,
  editProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  getProductByUser,
} = require("../controller/Product");

const router = express.Router();

// Add product to database
router.post("/add", addProduct);

//Edit product in database
router.put("/edit/:id", editProduct);

// Get all product from the datase
router.get("/", getAllProduct);

// Get all product by user
router.get("/user", getProductByUser);

// Get single product from the database
router.get("/:id", getSingleProduct);

// Delete product from database
router.delete("/delete/:id", deleteProduct);

module.exports = router;
