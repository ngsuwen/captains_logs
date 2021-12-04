const express = require('express')
const router=express.Router()
const methodOverride = require("method-override");

//------------------MPA-------------------------
router.use(express.urlencoded())
//include the method-override package
router.use(methodOverride("_method"));

//page to view all
router.get('/logs', (req, res) => {
    res.send('logs');
});

//page to create new
router.get('/new', (req, res) => {
    res.send('new');
});

//page to edit a single
router.get('/edit/:id', (req, res) => {
    res.send('path working');
});

//page to view single
router.get('/:id', (req, res) => {
    res.send('path working');
});


module.exports = router