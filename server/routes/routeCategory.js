const routeCategory = require('express').Router()
const ControllerCategory = require('../controllers/controllerCategory')

routeCategory.post('/categories', ControllerCategory.addCategory)
routeCategory.put('/categories/:id', ControllerCategory.editCategory)
routeCategory.delete('/categories/:id', ControllerCategory.deleteCategory)
routeCategory.get('/categories', ControllerCategory.fetchCategories)
routeCategory.get('/categories/:id', ControllerCategory.fetchCategoryDetail)

module.exports = routeCategory