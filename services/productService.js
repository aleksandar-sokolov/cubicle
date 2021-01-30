const Cube = require('../models/Cube');
const uniqid = require('uniqid');
const fs = require('fs');
let productsData = require('../config/products.json');

function getAll() {
    return productsData;
};

function createProduct(data) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel,
    );

    productsData.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if (err) {
            return console.log(err);
        }
    })
};

module.exports = {
    create: createProduct,
    getAll,
}