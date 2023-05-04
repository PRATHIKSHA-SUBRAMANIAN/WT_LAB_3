const http = require('http')
const url = require('url')
const querystring = require('querystring')

function onRequest(request, response) {
    var path = url.parse(request.url).pathname;

    console.log("Request for " + path + "received");

    var query = url.parse(request.url).query;

    var fname = querystring.parse(query)["fname"];

    var lname = querystring.parse(query)["lname"];

    var email = querystring.parse(query)["email"];

    var password = querystring.parse(query)["password"];

    response.write("Hi " + fname + " " + lname + "," + " Check out your email id and password =>" + "email id : " + email + " password : " + password);

    response.end();

} http.createServer(onRequest).listen(5502);

console.log("server has started");