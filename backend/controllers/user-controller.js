const { registerUser, login } = require("../services/user-services");

const register = async (req, res, next) => {
  try {
    const data = registerUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const data = login({
      email: req.body.email,
      password: req.body.password,
    });
    console.log(data);
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 404;
    next(error);
  }
};

module.exports.register = register;
module.exports.login = login;
