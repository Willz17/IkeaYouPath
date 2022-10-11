require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const products_router = require("./routes/products-router");
const cart_router = require("./routes/cart-router");

const PORT = 4000;
const app = express();
app.use(express.json());

// mongoose.connect(process.env.DB_URL);

// const db = mongoose.connection;

// db.on("error", (error) => {
//   console.error(error);
// });

// db.once("open", () => {
//   console.log("Connected to DB");
// });

// 'api/products'
app.use("/api/products", products_router);

// "/api/cart"
app.use("/api/cart", cart_router);

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}/`);
});
