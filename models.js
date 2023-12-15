const products = []

module.exports = class Products {
    constructor(){

    }
    addProduct(title){
        products.push(title)
    }
    getProducts(){
        return products
    }
}