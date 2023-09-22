const express = require('express')
const app = express()
const port = 3000

app.use(express.static('login-page'));    

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/login-page/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})