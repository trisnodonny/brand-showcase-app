const routeCustomer = require('express').Router()
const ControllerCustomer = require('../controllers/controllerCustomer')

routeCustomer.get("/customers/products", ControllerCustomer.customerFetchProducts)
routeCustomer.get("/customers/products/:id", ControllerCustomer.customerFetchProductsDetail)

module.exports = routeCustomer