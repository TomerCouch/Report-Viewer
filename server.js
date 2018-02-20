// Required Modules
var express = require("express");
var app = express();
var request = require('request');
var bodyParser = require('body-parser'); // to work with POST body request objects

var port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("./"));

// Make a POST request to get reports.
// Using request library for the http call
app.post('/reports', (req, res, next) => {
    request({
        url: 'https://api.rivhit.co.il/online/RivhitOnlineAPI.svc/Document.List',
        method: "POST",
        json: true, // -> important for parsing the request body
        body: req.body
    }).pipe(res);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(500)
});

app.get("/", function (req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});