const express = require('express');
const router = express.Router();

router.get('/inicio', function (req, res) {//inicio quedaría al final
    res.send("Página de inicio API");
});

router.get('/acerca', function (req, res) {//inicio quedaría al final
    res.send("Información de la API");
});

module.exports = router;

//mejor manera de organizar el cógido y todas las rutas en un sólo archivo