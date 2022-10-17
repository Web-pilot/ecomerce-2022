const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.status(401).json("Not authenticated");
  }
};

module.exports = isAuthenticated;
