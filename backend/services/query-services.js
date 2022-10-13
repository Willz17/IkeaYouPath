require("dotenv").config();

const sqlite3 = require("better-sqlite3");
const crypto = require("crypto");

const { passwordHasher, validatePassword } = require("./utils/password-crypto");

const DB_URL = "backend/database/db.db";

// const db = sqlite3(process.env.SQLITE3)
const db = sqlite3(DB_URL);

// >>>> [PRODUCTS] <<<<

/**
 * (TESTED)
 * @returns - All products
 */
const getAllProducts = () => {
  try {
    let query = `SELECT * FROM products;`;
    let statement = db.prepare(query);
    let products = statement.all();
    return products;
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} name - Product name
 * @param {*} id   - Product ID
 * @returns - Product or error object on error.
 */
const getProductByNameAndID = ({ name, id }) => {
  try {
    let query = `SELECT * FROM products WHERE id='${id}' AND name='${name}';`;
    let statement = db.prepare(query);
    let product = statement.all();
    return product;
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} term - Filter term. On products name OR section
 * @returns - JSON array of products if found, empty list or error object on error.
 */
const filter = (term) => {
  try {
    let query = `SELECT * FROM products WHERE name='${term}' OR section='${term}';`;
    let statement = db.prepare(query);
    let items = statement.all();
    return items;
  } catch (error) {
    return error;
  }
};

// >>>> [USERS]  <<<<

/**
 * (TESTED)
 * @param {*} param0 - Name, email and password of user to register
 * @ID - generated by @randomUUID (crypto)
 * @returns
 */
const registerUser = ({ name, email, password }) => {
  try {
    password = passwordHasher(password);
    console.log(password);
    let id = randomID();
    let query = `INSERT INTO users(name, id, email, password) VALUES(?,?,?,?);`;
    let statement = db.prepare(query).run(name, id, email, password);
    return statement;
    // return {
    //   name: name,
    //   email: email,
    //   cart: [], // empty cart
    // };
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * (authenticate with (email and password))
 * @param {*} param0 - Email and password of user
 * @returns - User object on sucess, error object on error.
 */
const loginUser = ({ email, password }) => {
  try {
    let h = getHash(email)[0].password;
    console.log(h);
    if (validatePassword(password, h)) {
      let query = `SELECT * FROM users WHERE email='${email}';`;
      let statement = db.prepare(query);
      let user = statement.all();
      return user;
    }
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} email - Email of user to fetch the user's respective cart items.
 * @returns - JSON array of products in cart.
 */
const getUsersCart = (email) => {
  try {
    let query = `SELECT * FROM cart where u_email='${email}';`;
    let statement = db.prepare(query);
    let cart = statement.all();
    return cart;
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} param0 - Email, product_ID, user_ID and quanity of product to be added
 * @returns - Confirmation statement on succes or error object on error
 */
const addItemToCart = ({ email, product_ID, user_ID, Q }) => {
  try {
    let query = `INSERT into cart(u_email, u_ID, p_ID, Q) VALUES(?,?,?,?);`;
    let statement = db.prepare(query).run(email, user_ID, product_ID, Q);
    return statement;
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} product_ID - ID of product to remove
 * @param {*} email - Email of user who saved product to cart
 * @returns
 */
const removeItemFromCart = ({ product_ID, email }) => {
  try {
    let query = "DELETE FROM cart WHERE p_ID= ? and u_email=? ;";
    let statement = db.prepare(query).run(product_ID, email);
    return statement;
  } catch (error) {
    return error;
  }
};

/**
 * (TESTED)
 * @param {*} email - Email of user to clear cart
 * @returns - Confirmation statement on succes or False on error
 */
const clearCart = (email) => {
  try {
    let query = "DELETE FROM cart WHERE u_email= ?;";
    let statement = db.prepare(query).run(email);
    return statement;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {*} email - Email of user for retrival of saved hash
 * @returns - hashed password JSON object
 */
const getHash = (email) => {
  let query = `SELECT password FROM users WHERE email='${email}'`;
  let statement = db.prepare(query);
  let h = statement.all();
  return h;
};

/**
 * Generate random UUID for registered users
 * @returns - UUID
 */
const randomID = () => {
  return crypto.randomUUID();
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProductByNameAndID = getProductByNameAndID;
module.exports.filter = filter;
module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
module.exports.getUsersCart = getUsersCart;
module.exports.addItemToCart = addItemToCart;
module.exports.clearCart = clearCart;
module.exports.removeItemFromCart = removeItemFromCart;