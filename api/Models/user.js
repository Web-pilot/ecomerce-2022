const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    profilePic: { type: String },
    phone: { type: String },
    email: { type: String },
    isAdmin: { type: Boolean, default: false },
    googleId: { type: String, require: true },
    address: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
