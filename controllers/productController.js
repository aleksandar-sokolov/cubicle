const { Router } = require('express');
const Cube = require('../models/cube');
const uniqid = require('uniqid');

const router = Router();

router.get('/', (req, res) => {
    res.render('home', {title: 'Home Page'});
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.post('/create', (req, res) => {
    //!!!validate inputs

    let data = req.body;
    let cube = new Cube(uniqid(), data.name, data.description, data.imageUrl, data.difficultyLevel);
    console.log(cube);
    res.redirect('/products');
});

router.get('/details/:productId', (req, res) => {
    res.render('details', {title:  `Details ${req.params.productId}`})
});

module.exports = router; 