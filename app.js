const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./utils/database')

db.execute("select * from products").then(products => console.log(products[0][0].title)).catch(err => console.log(err))

const router = require('./router')

const app = express()

app.set('view engine' , 'pug')
app.set('views' , 'views')

app.use(bodyParser.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname , 'public')))
app.use(router)

const server = http.createServer(app)
server.listen(3000)