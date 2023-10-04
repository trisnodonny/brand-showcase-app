const { Category } = require('../models')

class ControllerCategory {
  static async addCategory(req, res, next) {
    try {
      const { name } = req.body
      const newCategory = await Category.create({
        name
      })
      res.status(201).json(newCategory)
    } catch (err) {
      next(err)
    }
  }
  
  static async editCategory(req, res, next) {
    try {
      const { id } = req.params
      const { name } = req.body
      const categoryById = await Category.findByPk(id)

      if (!categoryById) throw { name:"NotFoundError"}

      const editedCategory = await Category.update({
        name
      }, {
        where: {
          id
        }
      })

      res.status(200).json({
        message: `${categoryById.name} category has been updated`
      })
    } catch (err) {
      console.log(err);
      next(err)
    }
  }

  static async deleteCategory(req, res, next) {
    try {
      const { id } = req.params
      const categoryById = await Category.findByPk(id)

      if (!categoryById) throw { name:"NotFoundError"}

      const deletedCategory = await Category.destroy({
        where: {
          id
        }
      })
      res.status(200).json({
        message: `${categoryById.name} category has been deleted`
      })
    } catch (err) {
      next(err)
    }
  }

  static async fetchCategories(req, res, next) {
    try {
      const categories = await Category.findAll()
      res.status(200).json(categories)
    } catch (err) {
      next(err)
    }
  }

  static async fetchCategoryDetail(req, res, next) {
    try {
      const { id } = req.params
      const category = await Category.findByPk(id)

      if (!category) throw { name:"NotFoundError"}

      res.status(200).json(category)
      
    } catch (err) {
      console.log(err);
      next(err)
    }
  }
}

module.exports = ControllerCategory