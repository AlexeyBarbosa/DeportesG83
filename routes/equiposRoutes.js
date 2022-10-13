const express = require('express');
const router = express.Router();
const equiposCtrl = require('../controllers/equiposCtrl');

router.post('/create', equiposCtrl.createEquipo);

router.get('/list', equiposCtrl.getEquiposList);

router.get('/:id', equiposCtrl.getEquipo);

router.put('/update', equiposCtrl.updateEquipo);

router.delete('/delete/:id', equiposCtrl.deleteEquipo);

module.exports = router;