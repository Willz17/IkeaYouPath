const express = require("express");
const cors = require("cors");

const products_router = require("./routes/products-router");
const cart_router = require("./routes/cart-router");

const PORT = 4000;
const app = express();
app.use(express.json());

// 'api/products'
app.use("/api/products", products_router);

// "/api/cart"
app.use("/api/cart", cart_router);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}/`);
});
