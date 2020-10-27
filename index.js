const product  = require('./product');
const cart = require('./cart');

const product1 = new product('Fruit' , 160 , '50$');


console.log(product1);
product1.add(product1);

const cart1 = new cart('11q' ,[product1])

console.log(cart1);