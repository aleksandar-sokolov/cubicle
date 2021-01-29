const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.get('/details/:productId', (req, res) => {
    res.render('details', {title:  `Details ${req.params.productId}`})
});

module.exports = router; 