// const {Product}  = require('./product');
// const {products} = require('./product');
// const productFileData = require('./product');
// let productFunc = productFileData.Product();

//after adjusting the array of products ^_^
const Product = require('./product');
const Cart = require('./cart');
const EventEmitter = require('events');
const event = new EventEmitter();

const product1 = new Product('Fruit' , 160 , '50$');

const product2 = new Product('Vegetables' , 120 , '100$');

const product3 = new Product('Seeds' , 110 , '150$');


// product1.add();

const cart = new Cart('11q');

let products = [product1 , product2 , product3];
products.forEach(myFunction);


function myFunction(item, index) {
    let theEvent =  cart.addProductToCart(item);
    event.on( theEvent, function(){
        console.log(`An Event Happened Product (${item.name} )Added to the cart ^_^ `);
    })
    event.emit(theEvent);

}



//This is the old try in events 

// product1.add(product1);
// console.log(products);
// let EventAdeddToCart = product1.add(product1);
// event.on(EventAdeddToCart, function(){
//     console.log(`An Event Happened Product (${product1.name} )Added to the cart ^_^ `);
// })

// event.emit(EventAdeddToCart);

// const product2 = new Product('Vegetables' , 120 , '100$');
// // console.log(product2);
// product1.add(product2);


// let EventAdeddToCart2 = product1.add(product2);
// event.on(EventAdeddToCart2, function(){
//     console.log(`An Event Happened Product (${product2.name} )Added to the cart ^_^ `);
// })

// event.emit(EventAdeddToCart2);


// console.log(products);

// const cart1 = new cart('11q' ,products)

// console.log(cart1);