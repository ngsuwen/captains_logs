const express = require('express')
const router=express.Router()
const Logs = require('../models/logs')

//------------------MPA-------------------------
router.use(express.urlencoded())

//page to view all
router.get('/logs', async(req, res) => {
    const logs=await Logs.find()
    res.render('index.ejs', {logs:logs});
});

//page to create new
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//page to view single
router.get('/:id', async(req, res) => {
    const data = await Logs.findById(req.params.id)
    res.render('show.ejs', {data: data});
});

//page to edit a single
router.get('/:id/edit', async(req, res) => {
    const data = await Logs.findById(req.params.id)
    res.render('edit.ejs', {data: data});
});

module.exports = router