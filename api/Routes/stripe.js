const postCharge = require("../helpers/stripe");
const bodyParser = require("body-parser");

const router = require("express").Router();

router.post("/create-checkout-session", postCharge);

module.exports = router;
