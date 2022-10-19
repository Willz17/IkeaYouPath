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

// productsSchema.index(
//   { section: 1 },
//   { collation: { locale: "en", strength: 2 } }
// );

// productsSchema.statics.filterSearch = function (term) {
//   return this.find({ section: new RegExp("^" + term + "\\b", "ig") }).collation(
//     { locale: "en", strength: 2 }
//   );
// };

const ProductsSchema = mongoose.model("products", productsSchema, "products");
module.exports = ProductsSchema;
