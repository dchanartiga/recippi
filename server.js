const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')
const Recippi = require('./models/Recippi.js')

app.set('view engine', 'pug')

app.use('/', express.static('public'))

app.get('/', function (req, res) {
  res.render('layout')
})

app.listen(port, () => console.log(`SERVER IS LISTENING ON PORT ${port}`))
