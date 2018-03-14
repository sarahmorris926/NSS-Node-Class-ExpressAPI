
const express = require('express');
require('dotenv').config(); // this will take any variables from .env file and add them as variables you can use in app.js
const app = express();
const port = process.env.PORT || 8080;


app.listen(port, () => {
    console.log('Listening on port ', port);
});