const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')
const sessions = require('express-sessions')
const pgp = require('pg-promise')()
const port = 3000

const models = require('./models')


app.engine('mustache', mustacheExpress())
app.set('views','./views')


app.listen(port,function(){
  console.log('server is running...')
})
n
