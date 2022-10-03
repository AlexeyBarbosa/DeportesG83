const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.send("Listar eventos");
});

router.post('/create', function (req, res) {
    res.send("Crear evento");
});

router.delete('/delete', function (req, res) {
    res.send("Eliminar evento");
});

router.put('/update', function (req, res) {
    res.send("Actualizar evento");
});

module.exports = router;