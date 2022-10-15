const express = require("express");
const { addProduct, editProduct } = require("../controller/Product");
const isAuthenticated = require("../helpers/checkAuth");

const router = express.Router();

router.post("/add", addProduct);

router.put("/edit/:id", editProduct);

module.exports = router;
