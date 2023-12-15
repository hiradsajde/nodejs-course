const express = require('express') 
const path = require('path')

const router = express.Router()
const mainDir = require('./utils/path')

const products = []

router.get('/' , (req , res) => {
    res.render('shop' , {products : products})
})

router.get('/add-product' , (req , res) => {
    res.sendFile(path.resolve('./views/add-product.html'))
})

router.post('/add-product' , (req , res) => {
    products.push(req.body.title);
    res.redirect('/')
})

router.use((req , res , next) => {
    res.sendFile(path.join(mainDir , 'views' , '404.html'))
})

module.exports = router