const Cart = require("../Models/Cart");
const Product = require("../Models/Product");
const User = require("../Models/User");

const addCartProduct = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);
  if (req.user) {
    const userId = req.user.id;
    try {
      const product = new Cart({
        productId,
        userId,
      });
      const newCartProduct = await product.save();
      const cartProduct = await Product.findById(newCartProduct.productId);
      const user = await User.findOne({ googleId: newCartProduct.userId });
      const cart = {
        _id: cartProduct._id,
        title: cartProduct.title,
        seller: user.username,
        price: cartProduct.price,
        quantity: 1,
        img: cartProduct.img,
      };
      console.log(cart);
      res.status(200).json(cart);
    } catch (error) {
      res.status(500).json(error.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

const getAllCartProduct = async (req, res) => {
  try {
    const productArray = [];
    const cartProducts = await Cart.find();
    cartProducts.forEach(
      (item = async () => {
        const cartProduct = await Product.findById(item.productId);
        const user = await User.findOne({ googleId: item.userId });
        const cart = {
          _id: item._id,
          title: cartProduct.title,
          seller: user.username,
          price: cartProduct.price,
          quantity: 1,
          img: cartProduct.img,
        };
        productArray.push(cart);
        cnosole.log(cart);
      })
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
      let productArray = [];
      cartProduct.forEach(async function (item) {
        const userCart = await Product.findById(item.productId);
        const user = await User.findOne({ googleId: item.userId });
        const cart = {
          _id: item._id,
          title: userCart.title,
          productId: item.productId,
          userId: item.userId,
          seller: user.username,
          price: userCart.price,
          quantity: item.quantity,
          img: userCart.img,
        };
        productArray.push(cart);
        if (cartProduct.length === productArray.length) {
          res.status(200).json(productArray);
        }
      });
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
    try {
      const product = await Cart.findById(id);
      if (product.userId !== req.user.id) {
        res.status(403).json("You are not allowed to do this");
      } else {
        const deletedItem = await Cart.findByIdAndDelete(id);
        res.status(200).json(deletedItem);
      }
    } catch (error) {
      res.status(error.message);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const increementQuantity = async (req, res) => {
  const { id } = req.params;
  if (req.isAuthenticated()) {
    try {
      const updateUser = await Cart.findByIdAndUpdate(
        id,
        { $inc: { quantity: 1 } },
        { new: true }
      );
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(error.message);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

const decreementQuantity = async (req, res) => {
  const { id } = req.params;
  if (req.isAuthenticated()) {
    try {
      const item = await Cart.findOne({ _id: id });
      if (item.quantity > 1) {
        const updateUser = await Cart.findByIdAndUpdate(
          id,
          { $inc: { quantity: -1 } },
          { new: true }
        );
        res.status(200).json(updateUser);
      }
    } catch (error) {
      res.status(error.message);
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
  increementQuantity,
  decreementQuantity,
};
