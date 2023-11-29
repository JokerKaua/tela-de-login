const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

//Definições 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('login-page')); //Serve pra enviar os arquivos estáticos

//Redirencionar rota '/' para '/login'
app.get('/', (req, res) => {
  res.redirect('/login');
});

//Rota 'login', enviando index.html
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login-page/index.html');
})

//Recebendo os dados do formulário do login
app.post('/login', (req, res) => {
  res.type('application/json').send(req.body);
  console.log(req.body);
  console.log(req.query.username);

  //Aqui será a parte de login e conexão com o BD

});


//porta
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});