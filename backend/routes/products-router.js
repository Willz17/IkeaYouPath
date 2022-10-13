const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getProducts,
  getSpecificProduct,
  filterSearch,
} = require("../controllers/products-controller");

// GET all listed products
// returns JSON array of product object (TESTED)
router.get("/", getProducts);

// get product by section or name (filter) (TESTED)
// return streamlined JSON array of object based on filter term
router.get("/search/:term", filterSearch);

// GET product by name
// returns JSON object (TESTED)
router.get("/:name/:ID", getSpecificProduct);

module.exports = router;
