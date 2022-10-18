const product_schema = require("../models/product");

/**
 * (TESTED)
 * @returns - All products
 */
const getAllProducts = async () => {
  try {
    const products = product_schema.find();
    return products;
  } catch (e) {
    return e;
  }
};

/**
 * (TESTED)
 * @param {*} name - Product name
 * @param {*} id   - Product ID
 * @returns - Product or error object on error.
 */
const getProductByNameAndID = async ({ name, id }) => {
  try {
    await product_schema.findById({ _id: id }, (err, product) => {
      if (!err) return product;
    });
  } catch (e) {
    return e;
  }
};

/**
 * (TESTED)
 * @param {*} term - Filter term. On products name OR section
 * @returns - JSON array of products if found, empty list or error object on error.
 */
const filter = async (term) => {
  try {
    await product_schema.find(
      { name: `/${term}/`, section: `/${term}/` },
      (err, products) => {
        if (!err) return products;
      }
    );
  } catch (e) {
    return e;
  }
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProductByNameAndID = getProductByNameAndID;
module.exports.filter = filter;
