const express = require('express');
const app = express();
const port = 3000;

// Template engine Setup
app.set('view engine', 'ejs');
// In case you want to change the name of the views folder, use the following code to define the new name you want to put.
// app.set('views', 'newName');


// Define static files folder
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.redirect('/myInfo')
});


app.get('/myInfo', (req, res) => {
    res.send('<h1>Hi, My name is Moe Hurmuz,</h1> <br> <p>now i install the plugins using nodemon</p> <br> <h3>By 😊</h3>')
});


app.get('/html', (req, res) => {
    // res.sendFile('./views/index.html', {root: __dirname})

    res.render('index') // This method is used with the template engine (view engine) and it goes directly to the views folder path, so we don't need to define our current path.
});


// If 404
app.use((req, res) => {
    res.status(404).send('<h1>Sorry,<br> I did not find the page you want 💔</h1>')
});


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
});



// Lesson 7 in node.js course (قناة اتعلم في ساعة)