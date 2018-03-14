const express = require('express');
require('dotenv').config(); // this will take any variables from .env file and add them as variables you can use in app.js
const app = express();
const routes = require('./routes/');


// middleware stack starts here
app.use("/api/v1/", routes);







app.use((req, res, next) => {
    let err = new Error("Not found");
    err.status = 404;
    next(err);
})

// custom error handler must be at very bottom
app.use( (err, req, res, next) => {
    // all errors go to here
    res.json({
        message: "Error error error!",
        err: err.message
    });
});


const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Listening on port ', port);
});

