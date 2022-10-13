const express = require("express");
const router = express.Router({ mergeParams: true });

const {
  getCart,
  addToCart,
  removeFromCart,
  clearUsersCart,
} = require("../controllers/cart-controller");

// get user's cart (GET) (email param) (TESTED)
router.get("/:email", getCart);

// add item to cart (POST) (BODY) -> {email, product_ID, user_ID, Q} (TESTED)
router.post("/", addToCart);

// remove item from cart (TESTED)
router.delete("/remove/:product_ID/:email", removeFromCart);

// clear cart (TESTED)
router.delete("/clear/:email", clearUsersCart);

module.exports = router;
