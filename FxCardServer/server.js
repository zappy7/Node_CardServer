'use strict';
var http = require('http');
var port = 1337;
var url = require("url");
var util = require('util');



http.createServer(function (req, res) {
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello World\n');
    //res.write(trailers);
    var params = url.parse(req.url, true).query;
    var funName = url.parse(req.url, true).pathname;
    console.log(util.inspect(url.parse(req.url, true)));
    switch (funName) {
        case "/login":
            Login(req, res);
            break;
        default:
            res.end("must be function");
            break;
    }
    
}).listen(port);
console.log('Server running at http://127.0.0.1:1337/');

function Login(req, res) {
    var resMes = { Result: 0 };
    var resJson = JSON.stringify(resMes);
    res.end(resJson);
}
