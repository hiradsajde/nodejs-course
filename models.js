const db = require('./utils/database')


module.exports = class Products {
    constructor(){
        
    }
    addProduct(title){
        return db.execute(`INSERT INTO PRODUCTS (title) Values ('${title}')`)
    }
    getProduct(id){
        return db.execute(`SELECT * FROM PRODUCTS WHERE id=${id}`)
    }
    async getProducts(){
        return db.execute(`SELECT * FROM PRODUCTS`)
    }
}