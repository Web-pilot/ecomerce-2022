const Category = require("../Models/Category");

const addCategory = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const category = new Category({
        text: req.body,
      });
      const newCategory = await category.save();
      res.status(200).json(newCategory);
    } catch (error) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

const editCategory = async (req, res) => {
  const { id } = req.params.id;
  if (req.isAuthenticated()) {
    try {
      const updatedCategory = await Category.findByIdAndUpdate(
        id,
        { $set: req.boy },
        { new: true }
      );
      res.status(200).json(updatedCategory);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleCategory = async (req, res) => {
  const { id } = req.params.id;
  try {
    const singleCategory = await Category.findById(id);
    res.status(200).json(singleCategory);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  addCategory,
  editCategory,
  getAllCategory,
  getSingleCategory,
};
