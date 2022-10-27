const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
require("./passport");

// Routes
const authRoute = require("./Routes/auth");
const productRoute = require("./Routes/product");
const categoryRoute = require("./Routes/category");
const commentRoute = require("./Routes/comment");
const cartRoute = require("./Routes/cart");
const stripeRoute = require("./Routes/stripe");
const stripeWebhookRouter = require("./Routes/stripeWebhook");
const orderRoute = require("./Routes/order");

// initialize app
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_SESSION_KEY],
    maxAge: 24 * 60 * 50 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("databse connected successfully"))
  .catch((err) => console.log(err));

app.use("/stripe", stripeWebhookRouter);

app.use(express.json());
app.use("/auth", authRoute);
app.use("/api/v1/products", productRoute);
app.use("/api/v1/categories", categoryRoute);
app.use("/api/v1/comments", commentRoute);
app.use("/api/v1/carts", cartRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/", stripeRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("app is running on port", PORT);
});
