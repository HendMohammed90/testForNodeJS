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

    constructor(userId ){
        this.products = [];
        this.userId = userId ;

    }
    addProductToCart(shoppingCartItem){ 
        // console.log(`Products added to the cart are${shoppingCart}`);
        this.products.push(shoppingCartItem) ;
        console.log(this);
    }
}