const express = require('express');
const router = express.Router();
const usuariosCtrl = require('../controllers/usuariosCtrl');

router.post('/create', usuariosCtrl.createUsuario);

router.get('/list', usuariosCtrl.getUsuariosList);

router.get('/:id', usuariosCtrl.getUsuario);

router.put('/update', usuariosCtrl.updateUsuario);

router.delete('/delete/:id', usuariosCtrl.deleteUsuario);

module.exports = router;