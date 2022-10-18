const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  //u_ID, p_ID, Q, u_email
  u_ID: {
    type: String,
    required: true,
  },
  p_ID: {
    type: String,
    required: true,
  },
  u_email: {
    type: String,
    required: true,
  },
  Q: {
    type: Number,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("cart", cartSchema);
