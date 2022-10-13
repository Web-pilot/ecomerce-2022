const Product = require("../Models/Product");

const addProduct = async (req, res) => {
  console.log(req.user);

  try {
    // const products = new Product({
    //   title: res.title,
    // });
  } catch (error) {
    res.status(500).json(err.message);
  }
};

module.exports = addProduct;
