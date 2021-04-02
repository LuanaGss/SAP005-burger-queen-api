const { Router } = require('express')
const productsController = require('../controller/productsController')

const router = Router()

router.post('/', productsController.postProducts) 
router.get('/', productsController.getProducts)
router.put('/:id', productsController.updateProducts) 
router.get('/:id', productsController.getProductsById) 
router.delete('/:id', productsController.deleteProducts) 

module.exports = router