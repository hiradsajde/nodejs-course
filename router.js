const express = require('express') 
const path = require('path')
const mainDir = require('./utils/path')
const controllers = require('./controllers')

const router = express.Router()

router.get('/' , controllers.getAllProducts)

router.get('/add-product' , controllers.getAddProduct)

router.post('/add-product' , controllers.postAddProduct)

router.use('/product/:product' , controllers.getProduct)

router.use((req , res , next) => {
    res.sendFile(path.join(mainDir , 'views' , '404.html'))
})

module.exports = router