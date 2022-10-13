const sqlite3 = require("better-sqlite3");
const file = require("./products.json");

const db = sqlite3(process.env.SQLITE3);
// console.log(file);

const inserter = (product) => {
  let query = `INSERT INTO products(name, id, section, coordinates, price, description, img) VALUES(?,?,?,?,?,?,?);`;
  let statement = db
    .prepare(query)
    .run(
      product.name,
      product.id,
      product.section,
      product.coordinates,
      product.price,
      product.description,
      product.img
    );
  return statement;
};

for (let product of file) {
  inserter(product);
}
