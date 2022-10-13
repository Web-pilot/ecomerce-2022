const express = require("express");
const addProduct = require("../controller/Product");

const router = express.Router();

router.post("/add", addProduct);

module.exports = router;
