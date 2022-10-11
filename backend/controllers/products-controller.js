const ProductSchema = require("../models/product");

const getAllProducts = async (req, res, next) => {
  try {
    const product = await ProductSchema.find();
    const r_object = extract(product);
    res.status(200).send(r_object);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

function extract(product) {
  return {
    id: product._id,
    name: product.name,
    price: `${product.price} SEK`,
    coordinates: {
      x: product.x,
      y: product.y,
    },
  };
}

const getProductByNameAndID = async (req, res, next) => {
  const p_name = req.params.name; // not unique
  const id = req.params.ID;
  try {
    await ProductSchema.findOne(
      {
        name: p_name,
        _id: id,
      },
      (error, product) => {
        res.status(200).send(product);
      }
    );
  } catch (e) {
    const error = new Error(`Product ${res.params.name} doesn't exist`);
    error.code = 404;
    next(error);
  }
};

// section
const filter = async (req, res, next) => {
  const term = req.params.term;

  try {
    await ProductSchema.find(
      {
        $or: [{ name: term }, { section: term }],
      },
      (err, products) => {
        res.status(200).send(products);
      }
    );
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

module.exports.getAllProducts = getAllProducts;
module.exports.getProductByName = getProductByNameAndID;
module.exports.filter = filter;
