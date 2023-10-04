const { verifyToken } = require('../helpers/jwt');
const { User } = require("../models");

const authentication = async (req, res, next) => {
  try {
    const { access_token } = req.headers;
    
    if (!access_token) {
      throw { name: "Unauthenticated" }
    }

    const payload = verifyToken(access_token)

    const findUser = await User.findOne({
      where: {
        id: payload.id,
        email: payload.email
      },
    });

    if (!findUser) {
      throw { name: "Unauthenticated"}
    }

    req.user = {
      id: findUser.id,
      email: findUser.email,
      name: findUser.username,
      role: findUser.role
    }
    next()
  } catch (err) {
    next(err)
  }
}

module.exports = authentication;