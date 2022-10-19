const product_schema = require("../models/product");

/**
 * (TESTED)
 * @returns - All products
 */
const getAllProducts = async () => {
  try {
    const products = await product_schema.find();
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
    const data = await product_schema.findOne({ id: id, name: name });
    return data;
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
  console.log(`/${term}/i`);
  try {
    const data = await product_schema.find({
      $or: [
        { section: term },
        {
          name: term,
        },
      ],
    });
    return data;
  } catch (e) {
    console.log("error", e);
    return e;
  }
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProductByNameAndID = getProductByNameAndID;
module.exports.filter = filter;
