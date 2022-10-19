const cart_schema = require("../models/cart");

/**
 * (TESTED)
 * @param {*} email - Email of user to fetch the user's respective cart items.
 * @returns - JSON array of products in cart.
 */
const getUsersCart = async (email) => {
  try {
    const data = await cart_schema.find({ u_email: email });
    return data;
  } catch (e) {
    return e;
  }
};

/**
 * (TESTED)
 * @param {*} param0 - Email, product_ID, user_ID and quanity of product to be added
 * @returns - Confirmation statement on succes or error object on error
 */
const addItemToCart = async ({ u_email, p_ID, u_ID, Q, name }) => {
  try {
    const cart_obj = new cart_schema({
      u_ID: u_ID,
      p_ID: p_ID,
      u_email: u_email,
      Q: Q,
      name: name,
    });

    const cart = await cart_obj.save();
    return cart;
  } catch (e) {
    return e;
  }
};

/**
 * (TESTED)
 * @param {*} product_ID - ID of product to remove
 * @param {*} email - Email of user who saved product to cart
 * @returns
 */
const removeItemFromCart = async ({ p_ID, u_email }) => {
  try {
    const data = await cart_schema.deleteOne({ p_ID: p_ID, u_email: u_email });
    return data;
  } catch (e) {
    return e;
  }
};

/**
 * (TESTED)
 * @param {*} email - Email of user to clear cart
 * @returns - Confirmation statement on succes or False on error
 */
const clearCart = async (email) => {
  try {
    await cart_schema.deleteMany({ u_email: email });
    return { message: "Product removed" };
  } catch (e) {
    return e;
  }
};

module.exports.getUsersCart = getUsersCart;
module.exports.addItemToCart = addItemToCart;
module.exports.clearCart = clearCart;
module.exports.removeItemFromCart = removeItemFromCart;
