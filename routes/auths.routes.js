const express = require('express')
const router = express.Router();

const AuthController = require('../controllers/ads.controller')


router.get('/auth/register', AuthController.getRegister );

router.post('/auth/login', AuthController.postLogin );

router.put('/departments/user', AuthController.putUser );


module.exports = router;