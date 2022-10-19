const {
  getUsersCart,
  addItemToCart,
  clearCart,
  removeItemFromCart,
} = require("../services/cart-services");

const getCart = async (req, res, next) => {
  try {
    const email = req.params.email;
    console.log(email);
    const data = await getUsersCart(email);
    console.log("controller", data);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const data = await addItemToCart({
      u_email: req.body.u_email,
      p_ID: req.body.p_ID,
      u_ID: req.body.u_ID,
      Q: req.body.Q,
      name: req.body.name,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const removeFromCart = async (req, res, next) => {
  try {
    const data = await removeItemFromCart({
      p_ID: req.params.p_ID,
      u_email: req.params.u_email,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const clearUsersCart = async (req, res, next) => {
  try {
    const email = req.params.email;
    const data = await clearCart(email);
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
