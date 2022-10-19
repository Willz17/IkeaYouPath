require("dotenv").config();
require("process").env;

const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

const products_router = require("./routes/products-router");
const user_router = require("./routes/user-router");
const user_schema = require("./models/user");

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_DB);
const db = mongoose.connection;

db.on("error", (error) => {
  console.error(error);
});

db.once("open", () => {
  console.log("Connected to DB");
});

app.use(
  cors({
    origin: "*",
  })
);

// 'api/products'
app.use("/api/products", products_router);

// "api/users"
app.use("/api/users", user_router);

app.use("/api/test", async (req, res) => {
  const obj = new user_schema({
    name: "wills",
    email: "will2@mail.ps",
    password: "password",
  });
  try {
    const u = await obj.save();
    res.json(u);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message } || "An Unknown error occured");
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}/`);
});
