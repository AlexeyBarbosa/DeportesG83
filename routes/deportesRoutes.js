const express = require('express');
const router = express.Router();
const deportesCtrl = require('../controllers/deportesCtrl');

router.get('/list', deportesCtrl.getDeportesList);

router.post('/create', deportesCtrl.createDeporte);

router.delete('/delete', function (req, res) {
    res.send("Eliminar deporte");
});

router.put('/update', function (req, res) {
    res.send("Actualizar deporte");
});

module.exports = router;