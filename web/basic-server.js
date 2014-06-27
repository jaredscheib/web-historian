var http = require("http");
var handler = require("./request-handler");
var utils = require("../node_modules/mocha/lib/utils");

var port = 8080;
var ip = "127.0.0.1";
var server = http.createServer(handler.handleRequest);
//var server = http.createServer(function(request, response){});
console.log("Listening on http://%d:%d",ip, port);
server.listen(port, ip);

// for testing http.get for downloadUrl
// var archive = require('../helpers/archive-helpers');
// archive.downloadUrls();
