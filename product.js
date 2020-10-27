module.exports = class Product{
    products = [];
    constructor(name ,amount , price){
        this.name = name ;
        this.amount = amount ;
        this.price = price ;
        this.products = [];
    }

    add(product){
        // products.push(product)
        this.products.push(product);
        // this.products =[...this.products, ...product];
        console.log(this.products);
        // return (this.products);
    }
}