const {Product}  = require('./product');
const {products} = require('./product');
// const productFileData = require('./product');
// let productFunc = productFileData.Product();
const cart = require('./cart');
const EventEmitter = require('events');
const event = new EventEmitter();

const product1 = new Product('Fruit' , 160 , '50$');


// console.log(product1);
product1.add(product1);
console.log(products);
let EventAdeddToCart = product1.add(product1);
event.on(EventAdeddToCart, function(){
    console.log(`An Event Happened Product (${product1.name} )Added to the cart ^_^ `);
})

event.emit(EventAdeddToCart);

const product2 = new Product('Vegetables' , 120 , '100$');
// console.log(product2);
product1.add(product2);


let EventAdeddToCart2 = product1.add(product2);
event.on(EventAdeddToCart2, function(){
    console.log(`An Event Happened Product (${product2.name} )Added to the cart ^_^ `);
})

event.emit(EventAdeddToCart2);


console.log(products);

const cart1 = new cart('11q' ,products)

console.log(cart1);