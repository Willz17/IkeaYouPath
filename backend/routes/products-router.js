const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getAllProducts,
  getProductByName,
  filter,
} = require("../controllers/products-controller");

// GET all listed products
// returns JSON array of product object
router.get("/", getAllProducts);

// GET product by name
// returns JSON object
router.get("/:name/:ID", getProductByName);

// get product by section or name (filter)
// return streamlined JSON array of object based on filter term
router.get("/search/:term", filter);

module.exports = router;
