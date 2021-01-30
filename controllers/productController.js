const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Home Page', products: productService.getAll() });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', (req, res) => {
    // TODO: !!!validate inputs

    // productService.create(req.body); //without callback for createService
    productService.create(req.body, (err) => {
        if (err) {
            return res.status(500).end();
        }
        res.redirect('/products');

    });
    // res.redirect('/products'); //without callback for createService

});

router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    res.render('details', { title: `Details ${product.name}`, product });
});



module.exports = router; 