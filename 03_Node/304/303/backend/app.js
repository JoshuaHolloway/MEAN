const express = require('express');
const app = express();

// Add middle-ware
app.use((req, res, next) => {
    console.log('Function-1 in app.js');
    next();
});

app.use((req, res, next) => {
    console.log('Function-2 in app.js');
    res.send('Hello from express!');
});

module.exports = app;