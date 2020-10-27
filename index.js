const {Product}  = require('./product');
const {products} = require('./product');

// const productFileData = require('./product');
// let productFunc = productFileData.Product();
const cart = require('./cart');

const product1 = new Product('Fruit' , 160 , '50$');


console.log(product1);
product1.add(product1);


const product2 = new Product('Vegetables' , 120 , '100$');
console.log(product2);
product1.add(product2);

console.log(products);

const cart1 = new cart('11q' ,products)

console.log(cart1);