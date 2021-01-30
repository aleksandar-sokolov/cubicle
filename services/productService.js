const Cube = require('../models/Cube');
const uniqid = require('uniqid');
// const fs = require('fs');
const fs = require('fs/promises');
let productsData = require('../config/products.json');
const path = require('path');
const x = require('uniqid');

function getAll(query) {

    let result = productsData.slice();

    if (query.search) {
        result = result.filter(x => x.name.toLowerCase().includes(query.search));
    };

    if (query.from) {
        result = result.filter(x => Number(x.level) >= Number(query.from));
    };

    if (query.to) {
        result = result.filter(x => Number(x.level) <= Number(query.to));
    };

    return result;
};

function getOne(id) {
    return productsData.find(x => x.id == id);

};

function createProduct(data, callback) {
    let cube = new Cube(
        uniqid(),
        data.name,
        data.description,
        data.imageUrl,
        data.difficultyLevel,
    );

    productsData.push(cube);

    // fs.writeFile(path.join(__dirname + '/../config/products.json'), JSON.stringify(productsData), (err) => { // without callback
    //     if (err) {
    //         return console.log(err);
    //     }
    // });
    // fs.writeFile(path.join(__dirname + '/../config/products.json'), JSON.stringify(productsData), callback); // with callback


    return fs.writeFile(path.join(__dirname + '/../config/products.json'), JSON.stringify(productsData)); // with promises
};

module.exports = {
    create: createProduct,
    getAll,
    getOne,
}