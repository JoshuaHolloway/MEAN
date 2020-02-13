const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    // -Restrict to domains sending a request with a specific set of headers besides the default headers.
    // -We want to allow extra headers:
    //  --Origin header
    //  --X-Requested-With
    //  --Content-Type
    //  --Accept Header
    //res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );

    // -Control with HTTP verbs may be used to send requests
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    // -Options is an implicit request sent by the browser by default prior to post requests
    //  to check whether the post-request is valid.

    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

// - - - - - - - - - - 

// [307]
app.post("/api/posts", (req, res, next) => {
    const post = req.body;
    console.log(post);

    // Status Code 201:
    //  -Everythin is okay - a new resourece was created

    res.status(201).json({
        message: 'JOSH: (app.js) Post added successfully'
    });
});

app.get("/api/posts", (req, res, next) => {
    const posts = [
        {
            id: "fadf12421l",
            title: "First server-side post",
            content: "This is coming from the server"
        },
        {
            id: "ksajflaj132",
            title: "Second server-side post",
            content: "This is coming from the server!"
        }
    ];
    res.status(200).json({
        message: "Posts fetched successfully!",
        posts: posts
    });
});

app.get('/', (req, res, next) => {
    res.send('JOSH');
}
);

module.exports = app;
