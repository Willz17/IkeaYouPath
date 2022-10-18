const {
  getAllProducts,
  getProductByNameAndID,
  filter,
} = require("../services/product-services");

const getProducts = async (req, res, next) => {
  try {
    const data = getAllProducts();
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const getSpecificProduct = async (req, res, next) => {
  const p_name = req.params.name; // not unique
  const id = req.params.ID;

  try {
    const data = getProductByNameAndID({
      name: p_name,
      id: id,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(`Product ${res.params.name} doesn't exist`);
    error.code = 404;
    next(error);
  }
};

// section
const filterSearch = async (req, res, next) => {
  const term = req.params.term;
  try {
    const data = filter(term);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

module.exports.getProducts = getProducts;
module.exports.getSpecificProduct = getSpecificProduct;
module.exports.filterSearch = filterSearch;
