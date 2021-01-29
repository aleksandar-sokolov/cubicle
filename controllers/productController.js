const { Router } = require('express');
const { route } = require('../routes');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { layout: false });
});

router.get('/create', (req, res) => {
    res.render('create', { layout: false });
});

module.exports = router; 