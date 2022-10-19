const express = require("express");
const {
  addComment,
  editComment,
  getAllComment,
  getSingleComment,
  deleteComment,
} = require("../controller/comment");

const router = express.Router();

// Add comment to database
router.post("/add", addComment);

//Edit comment in database
router.put("/edit/:id", editComment);

// Get all comment from the datase
router.get("/", getAllComment);

// Get single comment from the database
router.get("/:id", getSingleComment);

// Delete comment from database
router.delete("/delete/:id", deleteComment);

module.exports = router;
