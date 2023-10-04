const routeProduct = require('express').Router()
const ControllerProduct = require('../controllers/controllerProduct')
const { adminAuthorize } = require('../middleware/authorization')

routeProduct.post("/products", adminAuthorize, ControllerProduct.addProduct)
routeProduct.delete("/products/:id", adminAuthorize, ControllerProduct.deleteProduct)
routeProduct.put("/products/:id", adminAuthorize, ControllerProduct.editProduct)
routeProduct.get("/products", ControllerProduct.fetchProducts)
routeProduct.get("/products/:id", ControllerProduct.fetchProductDetail)

module.exports = routeProduct