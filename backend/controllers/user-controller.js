const { registerUser, loginUser } = require("../services/user-services");

const register = async (req, res, next) => {
  try {
    const data = await registerUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    res.json(data);
  } catch (e) {
    const error = new Error(e.message);
    error.code = 500;
    next(error);
  }
};

const login = async (req, res, next) => {
  const data = await loginUser({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(data);
  res.send(data);
};

module.exports.register = register;
module.exports.login = login;
