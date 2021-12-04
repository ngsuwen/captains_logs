const express = require('express')
const router = express.Router()
const Logs = require('../models/logs')

//-------------------API------------------------
router.use(express.urlencoded())

// view all
router.get('/logs', (req, res) => {
    res.send('logs');
});

// view one
router.get('/:id', (req, res) => {
    res.send('path working');
});

// create
router.post('/new', async(req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken? true:false
    const log = await Logs.create(req.body)
    res.send(log);
});

// delete
router.delete('/delete/:id', (req, res) => {
    res.send('path working');
});

// edit
router.put('/edit/:id', (req, res) => {
    res.send('path working');
});

module.exports = router