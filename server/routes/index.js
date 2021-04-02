const { Router } = require('express')
const orders = require('./orders')
const products = require('./products')
const users = require('./users')

const router = Router()

router.use('/orders', orders);
router.use('/products', products);
router.use('/users', users);


module.exports = router