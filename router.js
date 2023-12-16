const express = require('express') 
const path = require('path')

const router = express.Router()
const mainDir = require('./utils/path')
const controllers = require('./controllers')

router.get('/' , controllers.getAllProducts)

router.get('/add-product' , controllers.getAddProduct)

router.post('/add-product' , controllers.postAddProduct)

router.use('/:product' , controllers.getProduct)

router.use((req , res , next) => {
    res.sendFile(path.join(mainDir , 'views' , '404.html'))
})

module.exports = router