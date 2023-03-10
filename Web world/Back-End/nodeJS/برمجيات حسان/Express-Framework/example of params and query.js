// params & query 

const express = require('express');
const app = express();
const port = 8080;

app.get('/products/:id', function(request, response){
    let id = request.params.id;
    let key = request.query.key;
    let key2 = request.query.key2;
    response.send(`This is ID: ${id}, and this is key: ${key}, and this is another key ${key2}`)
});

app.listen(port, function(){
    console.log(`Listening at port ${port}...`)
});

// Lesson 7 in Node.js Course (برمجيات حسان) from time 07:40 to the end