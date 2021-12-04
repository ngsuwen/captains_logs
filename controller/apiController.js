const express = require('express')
const router = express.Router()

//-------------------API------------------------

// view all
router.get('/logs', (req, res) => {
    res.send('logs');
});

// view one
router.get('/:id', (req, res) => {
    res.send('path working');
});

// create
router.post('/new', (req, res) => {
    res.send('path working');
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