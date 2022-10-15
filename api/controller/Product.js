const Product = require("../Models/Product");

const addProduct = async (req, res) => {
  // const { title, img, price, categories, desc } = req.body;
  const userId = req.user.id;
  if (req.isAuthenticated) {
    console.log(req.body);
    try {
      // const product = new Product({
      //   title,
      //   img,
      //   price,
      //   userId,
      //   categories,
      // });
      // const newProduct = await product.save();
      // res.status(200).json(newProduct);
    } catch (error) {
      res.status(500).json(err.message);
    }
  } else {
    res.status(401).json("Not authenticated");
  }
};

module.exports = addProduct;
