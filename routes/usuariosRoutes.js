const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.send("Listar usuarios");
});

router.post('/create', function (req, res) {
    res.send("Crear usuario");
});

router.delete('/delete', function (req, res) {
    res.send("Eliminar usuario");
});

router.put('/update', function (req, res) {
    res.send("Actualizar usuario");
});

module.exports = router;