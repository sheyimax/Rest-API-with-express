const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');
const flight = require('../models/Flight.js');

//To get all Flight/Single flight
router.get('/model.sheyiModel', (req, res) => {
    res.send('model.sheyiModel')
});

router.get('/model.sheyiModel:id',(req, res) => {
    const flight = require('model.sheyiModel').find(c => c.id === parseInt(req.params.id));
    if (!flight) res.status(404).send('Your Flight is not found');
    res.send(flight);
});

//To Add or book a flight
router.post('/model.sheyiModel', (req, send) => {
    res.send('model.sheyiModel');
});

//To  Update/edit a flit
router.put('/model.sheyiModel', (req, send) => {
    res.send('model.sheyiModel');
});

//To delete a flight
router.delete('/model.sheyiModel', (req, send) => {
    res.send('model.sheyiModel');
});



router.get('/', controller.control);


module.exports = router;

