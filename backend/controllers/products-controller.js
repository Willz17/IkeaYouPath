const {
  getAllProducts,
  getProductByNameAndID,
  filter,
} = require("../services/product-services");

const getProducts = async (req, res, next) => {
  try {
    const data = await getAllProducts();
    // console.log(data);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const getSpecificProduct = async (req, res, next) => {
  const name = req.params.name; // not unique
  const id = req.params.ID;
  console.log(name, id);

  const data = await getProductByNameAndID({ name, id });
  console.log(data);
  res.send(data);
};

// section
const filterSearch = async (req, res, next) => {
  const term = req.params.term;
  console.log(term);

  const data = await filter(term);
  res.send(data);
};

module.exports.getProducts = getProducts;
module.exports.getSpecificProduct = getSpecificProduct;
module.exports.filterSearch = filterSearch;
