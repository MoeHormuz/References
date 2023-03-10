// .get() function

const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
var index = path.join(__dirname, 'index.html');
var gallery = path.join(__dirname, 'gallery.html');

/* app.get('/', function(request, response){
    // response.send('<h1><i>Hi Moe Hurmuz</i></h1>');   It will send Hi Moe Hurmuz 
    // response.send(path.join(__dirname, 'index.html'));   It will send the file path we set 
    // response.sendFile(path.join(__dirname, 'index.html')); It will send the file we set 
}); */

app.get('/index.html', function(req, res){   
    res.sendFile(index)
});

app.get('/gallery.html', function(req, res){
    res.sendFile(gallery)
});

app.listen(port, function(){
    console.log(`Listening at port ${port}...`)
});

// Lesson 7 in Node.js Course (برمجيات حسان) from time 04:09 to 07:40