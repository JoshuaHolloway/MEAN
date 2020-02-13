const express = require('express');
const app = express();


app.use('/api/posts', (req, res, next) => {
    console.log('/posts in app.js');
    const posts = [
        {
            id: 'fadf12421l',
            title: 'First server-side post',
            content: 'This is coming from the server'
        },
        {
            id: '4fasdf454',
            title: 'Second server-side post',
            content: 'This is ALSO coming from the server!'
        }
    ];
    res.status(200).json({
        message: 'Posts fetched successfully!',
        posts: posts
    });

});

// Add middle-ware
app.use((req, res, next) => {
    console.log('Function in app.js');
    res.send('Hello from express!');
});


module.exports = app;