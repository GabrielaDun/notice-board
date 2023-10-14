const express = require('express')
const router = express.Router();

const authMiddleware = require('../utils/authMiddleware')
const AuthController = require('../controllers/auths.controller')
const imageUpload = require('../utils/imageUpload')


router.post('/register', imageUpload.single('avatar'), AuthController.Register );
router.post('/login', AuthController.Login );
router.get('/user', authMiddleware, AuthController.getUser );
router.delete('/logout', AuthController.logOut );

module.exports = router;