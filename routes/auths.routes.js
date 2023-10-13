const express = require('express')
const router = express.Router();

const authMiddleware = require('../utils/authMiddleware')

const AuthController = require('../controllers/auths.controller')


router.post('/register', AuthController.Register );

router.post('/login', AuthController.Login );

router.get('/user', authMiddleware, AuthController.getUser );


module.exports = router;