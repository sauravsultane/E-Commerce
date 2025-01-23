const { name } = require("ejs");
const mongoose = require("mongoose");

mongoose.connect("mongodb:localhost:127.0.0.1:27017/");

const productScheam = new mongoose.Schema({
  image: String,
  name: String,
  price: Number,
  discount: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panalcolor: String,
  textcolor: String,
});

modules.exports = mongoose.model("product", productSchema);
