const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
const mongoose = require('mongoose')
const Recippi = require('./models/Recippi.js')

app.use('/', express.static('public'))

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(port, () => console.log(`SERVER IS LISTENING ON PORT ${port}`))