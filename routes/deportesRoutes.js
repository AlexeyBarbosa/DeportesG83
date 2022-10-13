const express = require('express');
const router = express.Router();
const deportesCtrl = require('../controllers/deportesCtrl');

router.post('/create', deportesCtrl.createDeporte);

router.get('/list', deportesCtrl.getDeportesList);

router.get('/:id', deportesCtrl.getDeporte);

router.put('/update', deportesCtrl.updateDeporte);

router.delete('/delete/:id', deportesCtrl.deleteDeporte);

module.exports = router;