const express = require('express')
const bodyParser = require('body-parser')

const route = require('./routes/route')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: true}))

app.use(route)

app.listen(3000)