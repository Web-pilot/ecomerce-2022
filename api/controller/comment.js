const Product = require("../Models/Product");

const addComment = async (req, res) => {
  const { text, rating } = req.body;
  if (req.isAuthenticated()) {
    const userId = req.user.id;
    try {
      const comment = new Comment({
        text,
        rating,
        userId,
      });
      const newComment = await comment.save();
      res.status(200).json(newComment);
    } catch (error) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

const editComment = async (req, res) => {
  if (req.isAuthenticated()) {
    const { id } = req.params;
    const comment = await Comment.findById(id);
    if (comment.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const updatedComment = await Comment.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedComment);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const getAllComment = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleComment = async (req, res) => {
  const { id } = req.params;
  try {
    const comment = await Comment.findById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  if (req.isAuthenticated()) {
    const comment = await Comment.findById(id);
    if (comment.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const deletedItem = await comment.findByIdAndDelete(id);
      res.status(200).json(deletedItem);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = {
  deleteComment,
  getAllComment,
  getSingleComment,
  addComment,
  editComment,
};
