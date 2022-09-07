// NODE SETUP

// const http = require("http");

// // create server - picking up the phone at the pizza place
// const server = http.createServer(function(req, res) {
//     console.log(`user visited ${req.url}`);    
//     res.end('hello welcome to John\'s Pizza!');
// });

// console.log('listening on http://localhost:3000');
// server.listen(3000);


// EXPRESS SETUP
const express = require('express');
const path = require('path');

const toppings = ['pepp', 'cheese', 'arugula', 'basil', 'mushrooms'];

function chooseRandomTopping() {
    const randomIndex = Math.floor(Math.random() * toppings.length);
    return toppings[randomIndex];
};

const app = express();

// Routes setup - anytime someone navigates to this endpoint, send them a response
// send user the index.html when they visit the root path
app.get('/', function(req, res) {    
    res.sendFile(path.join(__dirname, 'index.html'));
    // res.end('Welcome to John\'s Pizza Express!')
});

// send back a JSON object of a topping and a random value
app.get('/toppings', function(req, res) {
    // console.log(chooseRandomTopping())
    // let randomTopping = chooseRandomTopping();
    // return res.json(null).end();
    res.json({topping: chooseRandomTopping()}).end();
    // res.end('pepp, cheese, mushrooms, basil');
});

// anything in the public folder is served to the browser upon request (CSS file, img, JS)
app.use('/public', express.static('./public'));

app.listen(3000);
console.log('listening on http://localhost:3000');