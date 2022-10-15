const express = require("express");
const {
  addCategory,
  editCategory,
  getAllCategory,
  getSingleCategory,
} = require("../controller/category");

const router = express.Router();

router.post("/add", addCategory);

router.put("/edit/:id", editCategory);

router.get("/", getAllCategory);

router.get("/:id", getSingleCategory);

module.exports = router;
