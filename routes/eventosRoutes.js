const express = require('express');
const router = express.Router();
const eventosCtrl = require('../controllers/eventosCtrl');

router.post('/create', eventosCtrl.createEvento);

router.get('/list', eventosCtrl.getEventosList);

router.get('/:id', eventosCtrl.getEvento);

router.put('/update', eventosCtrl.updateEvento);

router.delete('/delete/:id', eventosCtrl.deleteEvento);

module.exports = router;