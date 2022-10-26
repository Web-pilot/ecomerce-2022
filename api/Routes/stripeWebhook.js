// Using Express
const router = require("express").Router();

// Use body-parser to retrieve the raw body as a buffer
const bodyParser = require("body-parser");
const paymentSuccessful = require("../hooks/stripeWebhook");

router.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  paymentSuccessful
);

module.exports = router;
