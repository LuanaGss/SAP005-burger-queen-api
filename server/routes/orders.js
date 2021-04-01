const { Router } = require('express')
const ordersController = require('../controller/ordersController')

const router = Router()

router.post('/', ordersController.postOrders) 
router.get('/', ordersController.getOrders) 
router.put('/:id', ordersController.updateOrders) 
router.get('/:id', ordersController.getOrdersById) 
router.delete('/:id', ordersController.deleteOrders) 

module.exports = router