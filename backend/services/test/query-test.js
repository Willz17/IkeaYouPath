const {
  registerUser,
  getAllProducts,
  getProductByNameAndID,
  filter,
  loginUser,
  getUsersCart,
  addItemToCart,
  clearCart,
  removeItemFromCart,
} = require("../query-services");

console.log(
  registerUser({
    name: "Wills",
    email: "wills1@mail.com",
    password: "password",
  })
);

console.log(getAllProducts());
console.log(getProductByNameAndID("Bed king size", 343232));
console.log(filter("Bedroom"));
console.log("--------");
console.log(filter("Queen king size"));
console.log("--------");

console.log(
  loginUser({
    email: "wills@mail.com",
    password: "password",
  })
);

console.log(getUsersCart("wills@mail.com"));
console.log(
  addItemToCart({
    email: "wills@mail.com",
    p_ID: "RTYE342",
    u_ID: "056bf61b-8188-4da0-87cf-8541fb9a8d63",
    Q: 3,
  })
);

console.log(clearCart("wills@mail.com"));
console.log(removeItemFromCart("44444", "wills@mail.com"));
