const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', (req, res) => {
    // TODO: !!!validate inputs

    productService.create(req.body);

    res.redirect('/products');

});

router.get('/details/:productId', (req, res) => {
    res.render('details', { title: `Details ${req.params.productId}` })
});

module.exports = router; 