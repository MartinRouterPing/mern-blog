const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index') //it looks in the views folder
})

app.listen(5000)
