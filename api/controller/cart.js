const Cart = require("../Models/Cart");
const Product = require("../Models/Product");
const User = require("../Models/User");

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
        const user = await Product.findById(item.userId);
        const cart = {
          title: cartProduct.title,
          seller: user.username,
          price: cartProduct.price,
          quantity: 1,
          img: cartProduct.img,
        };
        productArray.push(cart);
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
      const productArray = [];
      cartProduct.forEach(
        (item = async () => {
          const userCart = await Product.findById(item.productId);
          const user = await User.findOne({ googleId: item.userId });
          if (userCart && user) {
            const cart = {
              title: userCart.title,
              seller: user.username,
              price: userCart.price,
              quantity: 1,
              img: userCart.img,
            };
            productArray.push(cart);
          }
        })
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

module.exports = {
  deleteCartItem,
  getAllCartProduct,
  addCartProduct,
  getCartProductByuser,
};
