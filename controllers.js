const product = require('./models')
const path = require('path')

module.exports.getAddProduct = (req , res) => {
    res.render('add-product')
}

module.exports.postAddProduct = (req , res) => {
    product.create({
        title : req.body.title
    }).then(result => {
        res.redirect('/')
    })
}
module.exports.getAllProducts = (req , res) => {
    product.findAll().then(result => {
        res.render('shop' , {products : result})
    })
}

module.exports.getProduct = (req , res) => {
    product.findByPk(req.params.product).then(prod => {
        res.status(200).send(`<h1>${prod.title}</h1>`)
    })
}

module.exports.postDeleteProduct = (req , res) => {
    product.destroy({
        where : {
            id : req.body.id
        }
    }).then(result => {
        res.redirect('/')
    })
}