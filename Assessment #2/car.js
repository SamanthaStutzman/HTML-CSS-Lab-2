// Declare a class named Car 
// with a constructor that accepts one parameter named fuelLevel 

class Car {
    constructor(fuelLevel = 100) {
        // set parameter fuelLevel a default value of 100 if no argument is supplied
        this.fuelLevel = 100;
        //speed - initialized to the value of 0
        this.speed = 0;
        //engineOn - initialized to the value of false
        this.engineOn = false;
        //fuelLevel - initialized to the fuelLevel parameter
        this.fuelLevel = fuelLevel;
    }

    // accelerate - if (fuelLevel >= 1, decrease fuelLevel by 1 and increase speed by 1
    accelerate(speed = 1) {
        if (this.fuelLevel > 0) {
            this.fuelLevel -= 1;
            this.speed += speed;
        }
    }
    
    // brake - decreases speed by 1 . speed cannot go below 0
    brake() {
        if (this.speed > 0) {
            this.speed -= 1;
        }
    }
    
    // turnCarOn - sets engineOn to true
    turnCarOn() {
        this.engineOn = true;
    }
    
    // turnCarOff - sets engineOn to false
    turnCarOff() {
        this.engineOn = false;
    }
    
    // refillFuel - sets fuelLevel to 100
    refillFuel() {
        this.fuelLevel = 100;
    }
} 

// Create an instance of Car called myCar with 60 as the argument for fuelLevel
let myCar = new Car(60);

// Call the following methods in order. (You may also include any console.log’s you want.)

// refillFuel
myCar.refillFuel();

// turnCarOn
myCar.turnCarOn();

// accelerate
myCar.accelerate();

// accelerate
myCar.accelerate();

// accelerate
myCar.accelerate();

// brake
myCar.brake();

// brake
myCar.brake();

// brake
myCar.brake();

// turnCarOff
myCar.turnCarOff();