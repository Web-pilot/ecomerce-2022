const Product = require("../Models/Product");

const addProduct = async (req, res) => {
  const { title, img, price, categories, desc } = req.body;
  if (req.user) {
    const userId = req.user.id;
    try {
      const product = new Product({
        title,
        img,
        price,
        userId,
        categories,
        desc,
      });
      const newProduct = await product.save();
      res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

const editProduct = async (req, res) => {
  if (req.user) {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (product.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const updatedUser = await Product.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getProductByUser = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const products = await Product.find({ userId: req.user.id });
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const product = await Product.findById(id);
    if (product.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const deletedItem = await Product.findByIdAndDelete(id);
      res.status(200).json(deletedItem);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = {
  deleteProduct,
  getAllProduct,
  getSingleProduct,
  addProduct,
  editProduct,
  getProductByUser,
};
