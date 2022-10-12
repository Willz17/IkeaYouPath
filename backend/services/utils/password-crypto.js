const bcrypt = require("bcrypt");

/**
 *
 * @param {*} password - Password to hash
 * @returns - Hashed and salted password
 */
const passwordHasher = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 *
 * @param {*} password - Users password
 * @param {*} hash - Password hash returned from @getHash
 * @returns - True or false on valid/not valid
 */
const validatePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports.passwordHasher = passwordHasher;
module.exports.validatePassword = validatePassword;
