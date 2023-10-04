const routeUser = require('express').Router()
const ControllerUser = require('../controllers/controllerUser')
const authentication = require('../middleware/authentication')

routeUser.post('/login', ControllerUser.handleLogin)
routeUser.use(authentication)
routeUser.post('/register', ControllerUser.handleRegister)

module.exports = routeUser