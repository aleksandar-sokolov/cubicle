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

    productService.create(req.body);

    res.redirect('/products');

});

router.get('/details/:productId', (req, res) => {
    let product = productService.getOne(req.params.productId);
    res.render('details', { title: `Details ${product.name}`, product });
});

// function validateProduct(req, res, next) {
//     let isValid = true;
//     let body = req.body;
    
//     if (body.name.trim().lenght < 2) {
//         isValid = false;
//     } else if (body.imageUrl.lenght < 10) {
//         isValid = false;
//     }

//     if (isValid) {
//         next();
//     }
// }

module.exports = router; 