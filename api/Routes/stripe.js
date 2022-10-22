const postCharge = require("../helpers/stripe");

const router = require("express").Router();

router.post("/create-checkout-session", postCharge);

module.exports = router;
