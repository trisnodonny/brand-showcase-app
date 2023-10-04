const { Product, User, Category, Image } = require('../models')

class ControllerCustomer {
  static async customerFetchProducts(req, res, next) {
    try {
      const products = await Product.findAll({
        include: [
          {
            model: User
          },
          {
            model: Category
          }
        ] 
      })
      res.status(200).json(products)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async customerFetchProductsDetail(req, res, next) {
    try {
      const { id } = req.params
      const product = await Product.findByPk(id, {
        include: [
          {
            model: Image
          },
          {
            model: Category
          }
        ]
      })

      if (!product) throw { name:"NotFoundError"}

      res.status(200).json(product)
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = ControllerCustomer