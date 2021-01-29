const express = require('express'); 
const handlebarbs = require('express-handlebars');

function setupExpress(app) {
    app.engine('hbs', handlebarbs({
        extname: 'hbs',
    }));

    app.set('view engine', 'hbs');

    app.use(express.static('public'))
}


module.exports = setupExpress; 