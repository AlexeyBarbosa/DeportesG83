const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.send("Listar deportes");
});

router.post('/create', function (req, res) {
    res.send("Crear deporte");
});

router.delete('/delete', function (req, res) {
    res.send("Eliminar deporte");
});

router.put('/update', function (req, res) {
    res.send("Actualizar deporte");
});

module.exports = router;