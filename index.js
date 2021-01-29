const express = require('express');
const config = require('./config/config');
const setupExpress = require('./config/express');

const app = express();
setupExpress(app); 


app.get('/', (req, res) => {
    res.render('home', {layout: false});
});

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT} ....`));