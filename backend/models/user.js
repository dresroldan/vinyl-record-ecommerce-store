const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require('bcryptjs');
// mongoose.promise = Promise

// Define userSchema
const user = new Schema({
  username: { type: String, unique: true, required: false },
  password: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", user);
module.exports = User;
