const Product  = require('./product');
module.exports =  class Cart extends Product{

    constructor(userId ,products ){
        super();
        this.products = [Product];
        this.userId = userId ;

    }
    addProduct(){ 
        console.log('Product added');
    }
}