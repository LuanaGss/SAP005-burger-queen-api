const { Router } = require('express')
const userController = require('../controller/usersController')

const router = Router()

router.post('/', userController.postUsers)
router.get('/', userController.getUsers) 
router.put('/:id', userController.updateUsers) 
router.get('/:id', userController.getUserById) 
router.delete('/:id', userController.deleteUser)

module.exports = router