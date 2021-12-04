const express = require('express')
const router = express.Router()
const Logs = require('../models/logs')
const methodOverride = require("method-override");

//-------------------API------------------------
router.use(express.urlencoded())
router.use(methodOverride("_method"));

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
router.delete('/:id', async(req, res) => {
    const log = await Logs.findByIdAndDelete(req.params.id)
    res.send(log)
});

// edit
router.put('/:id', (req, res) => {
    res.send('path working');
});

module.exports = router