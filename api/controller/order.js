const Order = require("../Models/Order");

const editOrder = async (req, res) => {
  const { id } = req.params;
  if (req.isAuthenticated()) {
    if (req.user.isAdmin) {
      const updatedUser = await Order.findByIdAndUpdate(
        id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } else {
      res.status(403).json("You are not an admin!");
    }
  } else {
    res.status(401).json("You are not authenticated!");
  }
};

const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getSingleOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const cancelOrder = async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const product = await Order.findById(id);
    if (product.userId !== req.user.id) {
      res.status(403).json("You are not allowed to do this");
    } else {
      const cancelOrder = await Order.findByIdAndUpdate(
        id,
        { deleveryStatus: "cancel" },
        { new: true }
      );
      res.status(200).json(cancelOrder);
    }
  } else {
    res.status(401).json("You are not authenticated");
  }
};

module.exports = {
  getAllOrder,
  getSingleOrder,
  cancelOrder,
  editOrder,
};
