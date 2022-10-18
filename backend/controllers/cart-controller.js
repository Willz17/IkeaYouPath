const {
  getUsersCart,
  addItemToCart,
  clearCart,
  removeItemFromCart,
} = require("../services/cart-services");

const getCart = (req, res, next) => {
  try {
    const email = req.params.email;
    const data = getUsersCart(email);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const addToCart = (req, res, next) => {
  try {
    const data = addItemToCart({
      email: req.body.email,
      product_ID: req.body.product_ID,
      user_ID: req.body.user_ID,
      Q: req.body.Q,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const removeFromCart = (req, res, next) => {
  try {
    const data = removeItemFromCart({
      product_ID: req.params.product_ID,
      email: req.params.email,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const clearUsersCart = (req, res, next) => {
  try {
    const email = req.params.email;
    const data = clearCart(email);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

module.exports.getCart = getCart;
module.exports.addToCart = addToCart;
module.exports.removeFromCart = removeFromCart;
module.exports.clearUsersCart = clearUsersCart;
