const { Product } = require('../models')

const adminAuthorize = async (req, res, next) => {
  if(req.user.role === "Admin") {
    next()
  } else {
    next({ name:"Forbidden"})
  }
}

module.exports = {
  adminAuthorize
}