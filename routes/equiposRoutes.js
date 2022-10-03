const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.send("Listar equipos");
});

router.post('/create', function (req, res) {
    res.send("Crear equipo");
});

router.delete('/delete', function (req, res) {
    res.send("Eliminar equipo");
});

router.put('/update', function (req, res) {
    res.send("Actualizar equipo");
});

module.exports = router;