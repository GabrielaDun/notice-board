const express = require('express')
const router = express.Router();

const AdController = require('../controllers/ads.controller')
const adsimageUpload = require('../utils/adsimageUpload')

router.get('/ads', AdController.getAll);

router.get('/ads/:id', AdController.getById );

router.get('/ads/search/:searchPhrase', AdController.getbySearchPhase );

router.post('/ads', adsimageUpload.single('photo'), AdController.postById );

router.put('/ads/:id', AdController.putById );

router.delete('/ads/:id', AdController.deleteById );

module.exports = router;