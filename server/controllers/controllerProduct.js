const { Product, User, Category, Image, sequelize } = require('../models')

class ControllerProduct {
  static async addProduct(req, res, next) {
    const trx = await sequelize.transaction()
    try {
      const { name, description, price, mainImg, imgUrl, categoryId } = req.body
      const newProduct = await Product.create({
        name,
        description,
        price,
        mainImg,
        categoryId,
        authorId: req.user.id
      }, { 
        transaction: trx 
      })

      const dataImgUrl = imgUrl.map(el => {
        return {
          productId: newProduct.id,
          imgUrl: el
        }
      })

      const dataImage = await Image.bulkCreate(
        dataImgUrl, 
      {
        transaction: trx
      })
      await trx.commit()
      res.status(201).json({newProduct, dataImage})
    } catch (err) {
      console.log(err, "<<<<<<<<<<<<<<<<<<<KKKKKKKKKKKKKKKKKKKKK");
      await trx.rollback()
      next(err)
    }
  }

  static async deleteProduct(req, res, next) {
    try {
      const { id } = req.params
      const productById = await Product.findByPk(id)

      if (!productById) throw { name:"NotFoundError"}

      const deletedProduct = await Product.destroy({
        where: {
          id
        }
      })
      res.status(200).json({
        message: `${productById.name} has been deleted`
      })
    } catch (err) {
      console.log(err.message, '<<<<<<<<<<<<<<<<<<<<<<<<<<<<<=============');
      next(err)
    }
  }

  static async editProduct(req, res, next) {
    const trx = await sequelize.transaction()
    try {
      const { id } = req.params
      const { name, description, price, mainImg, imgUrl, categoryId } = req.body

      const productById = await Product.findByPk(id)
      
      if (!productById) throw { name:"NotFoundError"}

      const editedProduct = await Product.update({
        name,
        description,
        price,
        mainImg,
        categoryId
      }, {
        where: {
          id
        },
        transaction : trx,
      })

      await Image.destroy(({
        where: {
          productId: +id
        }
      }))

      const dataImgUrl = imgUrl.map(el => {
        return {
          productId: id,
          imgUrl: el
        }
      })

      console.log(dataImgUrl, "<<<<<<<<<<<");

      await Image.bulkCreate(
        dataImgUrl, 
      {
        transaction: trx
      })

      await trx.commit()

      res.status(200).json({
        message: `${productById.name} has been updated`
      })
    } catch (err) {
      console.log(err);
      await trx.rollback()
      next(err)
    }
  }

  static async fetchProducts(req, res, next) {
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
      next(err)
    }
  }

  static async fetchProductDetail(req, res, next) {
    try {
      const { id } = req.params
      const product = await Product.findByPk(id, {
        include: [
          {
            model: Image
          }
        ]
      })

      if (!product) throw { name:"NotFoundError"}

      res.status(200).json(product)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = ControllerProduct