import mongoose from 'mongoose';

// const Schema = mongoose.Schema;
// // const bcrypt = require('bcryptjs');
// // mongoose.promise = Promise

// // Define userSchema
// const user = new Schema({
//   username: { type: String, unique: true, required: false },
//   password: String,
//   isAdmin: {
//     type: Boolean,
//     default: false,
//   },
// });

// const User = mongoose.model("User", user);
// module.exports = User;

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
