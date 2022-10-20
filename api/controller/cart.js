const Cart = require("../Models/Cart");
const Product = require("../Models/Product");

const addCartProduct = async (req, res) => {
  const { productId } = req.params;
  if (req.user) {
    const userId = req.user.id;
    try {
      const product = new Cart({
        productId,
        userId,
      });
      const newCartProduct = await product.save();
      res.status(200).json(newCartProduct);
    } catch (error) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

const getAllCartProduct = async (req, res) => {
  try {
    const cartProducts = await Cart.find();
    const productArray = [];
    cartProducts.forEach(
      (item = async () => productArray.push(await Product.findById(item._id)))
    );
    res.status(200).json(productArray);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getCartProductByuser = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const cartProduct = await Cart.find({ userId: req.user.id });
      const productArray = [];
      cartProduct.forEach(
        (item = async () => productArray.push(await Product.findById(item._id)))
      );
      res.status(200).json(productArray);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const deleteCartItem = async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const product = await Cart.findById(id);
    if (product.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const deletedItem = await Cart.findByIdAndDelete(id);
      res.status(200).json(deletedItem);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = {
  deleteCartItem,
  getAllCartProduct,
  addCartProduct,
  getCartProductByuser,
};
