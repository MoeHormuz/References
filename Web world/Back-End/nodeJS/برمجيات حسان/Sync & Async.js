const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

http.createServer(function (request, response) {

    let filePath = path.join(__dirname, request.url);

    // Asynchronous:
    fs.readFile(filePath, function (err, data) {

        if (err) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            response.end('<h1>404 Not Found</h1>')
            return;
        }
        response.writeHead(202);
        response.write(data)
        response.end()

    });


    // Synchronous:
    /*  let Data = fs.readFileSync(filePath)
        if (!Data) {
            response.writeHead(404, { 'Content-Type': 'text/html' })
            response.end('<h1>404 Not Found</h1>')
            return;
        }
        response.writeHead(202);
        response.write(Data)
        response.end() */


}).listen(port, function () {
    console.log(`Listening on port ${port}...`)
});



// Lesson 4 in Node.js Course (برمجيات حسان)