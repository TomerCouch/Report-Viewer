// Required Modules
let express = require("express");
let app = express();
let request = require('request');
let bodyParser = require('body-parser'); // to work with POST body request objects

let port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static("./"));

// Make a POST request to get reports.
// Using request library for the http call
app.post('/reports', (req, res) => {
    request({
        url: 'https://api.rivhit.co.il/online/RivhitOnlineAPI.svc/Document.List',
        method: "POST",
        json: true, // -> important for parsing the request body
        body: req.body
    }).pipe(res);
});

app.get("/", function (req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});

// Start Server
app.listen(port, function () {
    console.log("Express server listening on port " + port);
});