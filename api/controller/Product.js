const Product = require("../Models/Product");

const addProduct = async (req, res) => {
  const { title, img, price, categories, desc } = req.body;
  if (req.isAuthenticated) {
    const userId = req.user.id;
    try {
      const product = new Product({
        title,
        img,
        price,
        userId,
        categories,
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
  const { id } = req.params.id;
  if (req.isAuthenticated) {
    const updatedUser = await Product.findByIdAndUpdate(
      id,
      { $set: req.boy },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } else {
  }
};

module.exports = { addProduct, editProduct };
