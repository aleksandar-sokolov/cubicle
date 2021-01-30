const { Router } = require('express');
const productService = require('../services/productService');

const router = Router();

router.get('/', (req, res) => {
    let products = productService.getAll(req.query)

    res.render('home', { title: 'Home Page', products });
});

router.get('/create', (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', (req, res) => {
    // TODO: !!!validate inputs

    // productService.create(req.body); //without callback for createService
    // res.redirect('/products'); //without callback for createService

    // productService.create(req.body, (err) => { // with callback
    //     if (err) {
    //         return res.status(500).end();
    //     }
    //     res.redirect('/products');

    // });

    productService.create(req.body)
        .then(() => res.redirect('/products'))
        .catch(() => res.status(500).end());

});

router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    res.render('details', { title: `Details ${product.name}`, product });
});



module.exports = router; 