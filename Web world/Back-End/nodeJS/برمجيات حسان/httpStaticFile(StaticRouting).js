const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

http.createServer(function (request, response) {

    let filePath = path.join(__dirname, request.url);

    fs.readFile(filePath, function (err, data) {

        if (err) {
            response.writeHead(404, {'Content-Type': 'text/html'})
            response.end('<h1>404 Not Found</h1>')
            return;
        }
        response.writeHead(202);
        response.write(data)
        response.end()

    });
}).listen(port, function () {
    console.log(`Listening on port ${port}...`)
});



// Lesson 3 in Node.js Course (برمجيات حسان)