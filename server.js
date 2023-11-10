const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use('/login', express.static('login-page'));    

app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login-page/index.html');
})

app.post('/login', (req, res) => {
  res.send(`Paramters: ${req.params}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})