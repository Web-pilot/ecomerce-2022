const { postCharge, onCheckOutSessionCompleted } = require("../helpers/stripe");

const router = require("express").Router();

router.post("/create-checkout-session", postCharge);

router.post("/webhook", onCheckOutSessionCompleted);

module.exports = router;
