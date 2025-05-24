const express = require('express');
const userControllers = require('../controllers/userController')
const router = express.Router();

router.get('/',userControllers.getAllUsers)

router.post('/',userControllers.addUser)

router.get('/:id',userControllers.getUserById)

module.exports=router;