const router = require("express").Router();
const passport = require("passport");
const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(200).json(null);
  }
});

router.get("/login/failure", (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({
    sucess: true,
    redirec_url: CLIENT_URL
  })
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failure",
  })
);

module.exports = router;
