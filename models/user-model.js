const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:127.0.0.1:27017/firstdb/e-commerce");

const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,

  cart: {
    type: Array,
    default: [],
  },
  orders: {
    type: Array,
    default: [],
  },
  isAdmin: Boolean,
  contact: Number,
  picture: String,
});
module.exports = mongoose.model("users", userSchema);
