const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, require: true, unique: true },
    profilePic: { type: String },
    isAdmin: { type: Boolean, default: false },
    googleId: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
