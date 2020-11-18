// products = [];
// class Product{

//     constructor(name ,amount , price){
//         this.name = name ;
//         this.amount = amount ;
//         this.price = price ;
//         // this.products = [];
//     }

//     add(product){
//         // products.push(product)
//         products.push(product);
//         // this.products =[...this.products, ...product];
//         // console.log(products);
//         // return (this.products);
//         // console.log(this);
//     }
// }
// exports.products = products ;
// exports.Product = Product ;


module.exports =  class Product{

    constructor(name ,amount , price ){
        this.name = name ;
        this.amount = amount ;
        this.price = price ;
    }

    add(){
        console.log("Product Add to the Database ^_^");
        console.log(this);
    }
}