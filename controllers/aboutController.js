const { Router } = require('express');
const { route } = require('../routes');

const router = Router();

router.get('/', (req, res) => {
    res.render('about', { layout: false });
});

module.exports = router; 