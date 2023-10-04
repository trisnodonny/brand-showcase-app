const { User } = require('../models')
const { signToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')

class ControllerUser {
  static async handleLogin(req, res, next) {
    try {
      const { email, password } = req.body

      if (!email) throw { name: `EmailRequired` };
      if (!password) throw { name: `PasswordRequired` };

      const user = await User.findOne({
        where: {
          email,
        }
      });

      if (!user) throw { name: "InvalidLogin" };

      const isValidPassword = comparePassword(password, user.password)

      if (!isValidPassword) throw { name: "InvalidLogin" };

      const accessToken = signToken({
        id: user.id,
        email: user.email
      })

      res.status(200).json({
        access_token: accessToken,
        // username: user.username,
        // role: user.role,
        // id: user.id
      })
    } catch (err) {
      next(err)
    }
  }

  static async handleRegister(req, res, next) {
    try {
      const { username, email, password, phoneNumber, address } = req.body
      const newUser = await User.create({
        username, 
        email, 
        password, 
        role: "Admin", 
        phoneNumber, 
        address
      });
      res.status(201).json({
        id: newUser.id,
        email: newUser.email
      });
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = ControllerUser