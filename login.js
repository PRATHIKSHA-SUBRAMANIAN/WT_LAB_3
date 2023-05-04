const http = require('http')
const querystring = require('querystring')

var query,email,password;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', function () {
        query = querystring.parse(data1);

        console.log(query);

        email = query['email']

        password = query['password']

        res.write("Check out your email id and password email id : "+email +" password : "+password);

        res.end();

    });

}).listen(5501); console.log('Server has Started.......');

console.log(email);
console.log(password);