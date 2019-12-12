//"use strict";
{   
    class ListItem {
        constructor (name, price) {
            this.name = name;
            this.price = price;
        }
    } 
    
    class ShoppingCart {
        shoppingCart = [];
        constructor(cart) {
            this.shoppingCart = cart;
        }
        addProduct(product) {
            this.shoppingCart = [...this.shoppingCart, product]
        }
        removeItem(name) {
            this.shoppingCart.splice(this.shoppingCart.findIndex( product => { return name === product.name; }), 1);
        }
        editItem(product) {
            this.shoppingCart[this.shoppingCart.findIndex( product => { return name === product.name; }) ] = product;
        }
    }
    
    const itemList = [
        new ListItem("dog", 300),
        new ListItem("cat", 100),
        new ListItem("human", 50),
        new ListItem("goat", 175),
        new ListItem("fish", 25)
    ]
    
    let cart = new ShoppingCart(itemList);
    console.log(cart.shoppingCart);
    cart.removeItem('Tiger');
    console.log(cart.shoppingCart);
    
}
