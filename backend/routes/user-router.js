const express = require("express");
const router = express.Router({ mergeParams: true });

const cart_router = require("./cart-router");
const { register, login } = require("../controllers/user-controller");

// register user (POST) (body) -> {name, email, password} (TESTED)
router.post("/register", register);

// login  (POST) (body) -> {email, password} (TESTED)
router.post("/login", login);

// "/api/users/cart"
router.use("/cart", cart_router);

module.exports = router;
