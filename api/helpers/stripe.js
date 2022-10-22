// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Cart = require("../Models/Cart");
const Product = require("../Models/Product");

const YOUR_DOMAIN = process.env.DOMAIN_URL;

const postCharge = async (req, res) => {
  const line_items = [];
  for await (const item of req.body.items) {
    const storeItem = await Product.findById(item.productId);
    const cartItem = await Cart.findById(item._id);
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: storeItem.title,
          images: [item.img],
        },
        unit_amount: parseInt(storeItem.price) * 100,
      },
      quantity: cartItem.quantity,
    });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      customer_email: req.user.email,
      submit_type: "pay",
      billing_address_collection: "auto",
      // shipping_address_collection: {
      //   allowed_countries: ["US", "CA"],
      // },
      payment_method_types: ["card"],
      mode: "payment",
      line_items: line_items,

      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/canceled`,
    });

    res.status(200).json(session.url);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = postCharge;
