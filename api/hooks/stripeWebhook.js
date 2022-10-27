// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../Models/Product");
const Order = require("../Models/Order");
const User = require("../Models/User");
const Cart = require("../Models/Cart");
const express = require("express");
const main = require("../helpers/nodemailer");

// Find your endpoint's secret in your Dashboard's webhook settings
const endpointSecret = process.env.END_POINT_SECRET;

const fulfillOrder = async (session) => {
  try {
    const productArray = [];
    const user = await User.findOne({ email: session.customer_email });
    const cartItem = await Cart.find({ userId: user.googleId });
    for await (item of cartItem) {
      const product = await Product.findById(item.productId);
      productArray.push({
        producId: item.productId,
        title: product.title,
        img: product.img,
        price: product.price,
        quantity: item.quantity,
        selledId: product.userId,
      });
    }
    if (productArray.length === cartItem.length) {
      const order = new Order({
        userId: user.id,
        products: productArray,
        shippingAddress: session.shipping_details,
      });
      await order.save();
      productArray.forEach(async function (item) {
        const sellers = await User.find({ googleId: item.selledId });
        const userEmail = [];
        for await (item of sellers) {
          userEmail.push(item.email);
          // await main(
          //   item.email,
          //   "HOWDY! RECOMERCE ORDER",
          //   "You have an order at Recomerce store"
          // );
          // console.log(item.e);
        }
        // await Cart.deleteMany({ userId: user._id });
        const unique = new Set(userEmail);
        console.log(unique);
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const paymentSuccessful = async (request, response) => {
  const payload = request.body;
  const sig = request.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err) {
    return response.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout.session.completed event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Fulfill the purchase...
    await fulfillOrder(session);
  }

  response.status(200);
};

module.exports = paymentSuccessful;
