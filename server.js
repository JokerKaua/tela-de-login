const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));   
app.use(express.static('login-page')); 

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login-page/index.html');
})

app.post('/login', (req, res) => {
  res.type('application/json').send(req.body);
  console.log(req.body);
  console.log(req.query.username);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})