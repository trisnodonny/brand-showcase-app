const router = require('express').Router()
const routeUser = require('./routeUser')
const routeProduct = require('./routeProduct')
const routeCategory = require('./routeCategory')
const routeCustomer = require('./routeCustomer')

router.use(routeCustomer)

router.use(routeUser)
router.use(routeProduct)
router.use(routeCategory)

module.exports = router