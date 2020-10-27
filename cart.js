// const Product  = require('./product');
// module.exports =  class Cart extends Product{

//     constructor(userId ,products ){
//         super();
//         this.products = [Product];
//         this.userId = userId ;

//     }
//     addProduct(){ 
//         console.log('Product added');
//     }
// }

module.exports =  class Cart{

    constructor(userId , products ){
        this.products = products;
        this.userId = userId ;

    }
    addProduct(){ 
        console.log('Product added');
    }
}