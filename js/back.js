const igdb = require('igdb-api-node').default;

const client = igdb('b0b518b52239e302279cb9e719a371c8');
var express = require('express');
var app = express();

// on the request to root (localhost:3000/)
app.get('/igdb', function (req, res) {
    // res.send('<b>My</b> first express http server');
    res.setHeader('Access-Control-Allow-Origin', '*');

    client.games({
        fields: '*', // Return all fields
        limit: 5, // Limit to 5 results
        offset: 15 // Index offset for results
    }).then(response => {
        // response.body contains the parsed JSON response to this query
        //console.log('response.body', response.body);
        res.send(response.body);
    }).catch(error => {
        throw error;
    });
});

// // On localhost:3000/welcome
// app.get('/welcome', function (req, res) {
//     res.send('<b>Hello</b> welcome to my http server made with express');
// });

// // Change the 404 message modifing the middleware
// app.use(function(req, res, next) {
//     res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
// });

// start the server in the port 3000 !
app.listen(3000, function () {
    console.log('Example app listening on port 3000.');
});