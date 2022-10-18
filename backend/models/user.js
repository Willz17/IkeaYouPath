const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// password hash and salt gen
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// password validation on login
userSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const UsersSchema = mongoose.model("users", userSchema, "users");
module.exports = UsersSchema;
