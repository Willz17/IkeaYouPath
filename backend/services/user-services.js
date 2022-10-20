const user_schema = require("../models/user");

/**
 * (TESTED)
 * @param {*} param0 - Name, email and password of user to register
 * @returns User object or Error Object on error.
 */
const registerUser = async ({ name, email, password }) => {
  const user_obj = new user_schema({
    name: name,
    email: email,
  });
  user_obj.password = user_obj.generateHash(password);

  try {
    const user = await user_obj.save();
    return { user: user, code: 200 };
  } catch (e) {
    console.log(e);
    return { message: "Email already in use", code: 400 };
  }
};

/**
 * (TESTED)
 * (authenticate with (email and password))
 * @param {*} param0 - Email and password of user
 * @returns - User object on sucess, error object on error.
 */
const loginUser = async ({ email, password }) => {
  const obj = await user_schema.findOne({ email: email }).clone();

  if (obj && obj.validatePassword(password)) {
    return { obj: obj, code: 200 };
  } else {
    return {
      message: "Credentials error, Check your email or password",
      code: 400,
    };
  }
};

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
