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

// console.log(
//   registerUser({
//     name: "Wills",
//     email: "wills1@mail.com",
//     password: "password",
//   })
// );

// console.log(getAllProducts());
// console.log(
//   getProductByNameAndID({
//     name: "Bed king size",
//     id: 343232,
//   })
// );
console.log(filter("Test"));
console.log("--------");
console.log(filter("Queen king size"));
console.log("--------");

// console.log(
//   loginUser({
//     email: "wills@mail.com",
//     password: "password",
//   })
// );

// console.log(
//   addItemToCart({
//     email: "wills@mail.com",
//     user_ID: "056bf61b-8188-4da0-87cf-8541fb9a8d63",
//     product_ID: "RTYE342",
//     Q: 3,
//   })
// );
// console.log(getUsersCart("wills@mail.com"));

// console.log(clearCart("wills@mail.com"));
// console.log(
//   removeItemFromCart({
//     product_ID: "44444",
//     email: "wills@mail.com",
//   })
// );
