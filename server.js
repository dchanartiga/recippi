const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')
const Recippi = require('./models/Recippi.js')

var PagesController = require('./controllers/pages.js')
var PostsController = require('./controllers/posts.js')

app.set('view engine', 'pug')

mongoose.connect('mongodb://localhost:27017/recippi', {useNewUrlParser: true})

app.use('/', express.static('public'))

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/recipes', function (req, res) {
  res.render('recipe')
})

app.post('/new-post', PostsController.newPost)

app.listen(port, () => console.log(`SERVER IS LISTENING ON PORT ${port}`))
