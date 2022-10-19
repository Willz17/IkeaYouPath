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
  try {
    const all = await getAllProducts(); // get all avialable ps
    let products = [];
    for (let item of all) {
      if (
        item.section.toString().toLowerCase().includes(term.toLowerCase()) ||
        item.name.toString().toLowerCase().includes(term.toLowerCase())
      ) {
        products.push(item);
      }
    }
    return products;
  } catch (e) {
    console.log("error", e);
    return e;
  }
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProductByNameAndID = getProductByNameAndID;
module.exports.filter = filter;
