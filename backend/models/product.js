const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

const ProductsSchema = mongoose.model("products", productsSchema, "products");
module.exports = ProductsSchema;
