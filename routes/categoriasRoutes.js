const express = require('express');
const router = express.Router();

router.get('/list', function (req, res) {
    res.send("Listar categorias");
});

router.post('/create', function (req, res) {
    res.send("Crear categoria");
});

router.delete('/delete', function (req, res) {
    res.send("Eliminar categoria");
});

router.put('/update', function (req, res) {
    res.send("Actualizar categoria");
});

module.exports = router;