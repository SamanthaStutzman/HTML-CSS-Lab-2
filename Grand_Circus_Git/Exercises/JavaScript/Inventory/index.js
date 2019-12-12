class Store {
    constructor() {
        // Array of Objects
        this.inventory = [
            
        ];
    }
    
    addProduct = product => {
        this.inventory.push(product);
    }
    
    removeProduct = (product) => {
        this.inventory.splice(product,1);
    }
}
class Product {
    constructor(name, price, type) {
        this.name = name;
        this.price = price;
        this.type = type;
    }
    
    getName() {
        return (this.name);
    }
    
    getPrice() {
        return (this.price);
        
    }
    
    getType() {
        return (this.type);
    }
}
class Computer extends Product {
    constructor(name,price,size) {
        super(name,price, 'Computer');
        this.size = size;
    }
    
}
class Laptop extends Computer {
    constructor(name, price, size, batteryLife){
        super(name, price, size, `Laptop`);
        this.batteryLife = batteryLife;
    }
}
class Sticker extends Product {
    constructor(name,price) {
        super(name,price, 'Sticker');
        this.color = true;
    }
}
class HDMI extends Product {
    constructor(name,price,length) {
        super(name,price, 'HDMI');
        this.length = length;
    }
}
class Monitor extends Product {
    constructor(name,price,size) {
        super(name,price, 'Monitor');
        this.size = size;
    }
}
class MountainDew extends Product {
    constructor(name,price,size) {
        super(name,price, 'Mountain Dew');
        this.size = size;
        this.diet = false;
    }
}

let dell = new Laptop(`Dell`, `$2000`, `15 inches`, `10 hours`);
let linux = new Laptop(`Linux`, `$1200`, `13 inches`, `8 hours`);
let macbook = new Laptop(`MacBook`, `$2500`, `13 inches`, `12 hours`);

let mac = new Computer (`Mac`, `$4000`, `27 inches`);

console.log(mac instanceof Laptop);
console.log(mac instanceof Computer);
console.log(mac instanceof Product);

let store = new Store();

// add products
store.addProduct(dell);
store.addProduct(mac);
store.addProduct(linux);
store.addProduct(macbook);
console.log(store);

// get all laptops
getProductsByType = type => store.inventory.filter(item => item instanceof type);
getLaptops = _ => getProductsByType(Laptop);
console.log(`Here are all the Laptop options at our store`, getLaptops());

// remove a specific product
store.removeProduct(dell);
console.log(store);

// get the price of a specific product
console.log(`The price of this machine is ` + macbook.getPrice());