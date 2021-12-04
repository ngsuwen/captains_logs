const express = require('express')
const router = express.Router()
const Logs = require('../models/logs')
const methodOverride = require("method-override");

//-------------------API------------------------
router.use(express.urlencoded())
router.use(methodOverride("_method"));

// create
router.post('/new', async(req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken? true:false
    const log = await Logs.create(req.body)
    res.redirect('/logs')
});

// delete
router.delete('/:id', async(req, res) => {
    const log = await Logs.findByIdAndDelete(req.params.id)
    res.redirect('/logs')
});

// edit
router.put('/:id', async(req, res) => {
    req.body.shipIsBroken = req.body.shipIsBroken? true:false
    const log = await Logs.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/logs')
});

module.exports = router