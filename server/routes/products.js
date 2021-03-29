const { Router } = require('express')
const ExampleController = require('../controller/ExampleController')

const router = Router()

router.post('/', ExampleController.getAllExamples) 
router.get('/', ExampleController.getAllExamples)
router.put('/:id', ExampleController.getAllExamples) 
router.get('/:id', ExampleController.getAllExamples) 
router.delete('/:id', ExampleController.getAllExamples) 

module.exports = router