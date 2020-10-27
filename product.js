products = [];
class Product{

    constructor(name ,amount , price){
        this.name = name ;
        this.amount = amount ;
        this.price = price ;
        // this.products = [];
    }

    add(product){
        // products.push(product)
        products.push(product);
        // this.products =[...this.products, ...product];
        // console.log(products);
        // return (this.products);
    }
}
exports.products = products ;
exports.Product = Product ;

