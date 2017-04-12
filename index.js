var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function (request, response) {

    var pathname = url.parse(request.url).pathname;

    if (pathname === "/") {

        fs.readFile('./public/home.html', function (err, data) {

            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end('<h1>Error 404: page not found.</h1>');
            }

            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
                response.end();
            }
        });
    }

    else if (pathname === "/about") {

        fs.readFile('./public/about.html', function (err, data) {

            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end('<h1>Error 404: page not found.</h1>');
            }

            else {
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.write(data.toString());
                response.end();
            }
        });
    }


    else {
                response.writeHead(404, {'Content-Type': 'text/html'});
                response.end('<h1>Error 404: page not found.</h1>');
    }

}).listen(3000);