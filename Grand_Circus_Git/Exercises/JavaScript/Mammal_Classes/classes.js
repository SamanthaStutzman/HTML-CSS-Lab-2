"use strict"

class Mammals {
    constructor(name, age, breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
        this.eyes = 2;
        this.legs = 4;
    }

    breathes() {
        console.log('hhhhhh');
    }
}

class Dog extends Mammals {
    constructor(name, age, breed) {
        super(name, age, breed);

        console.log (`${name} is a ${age} years old ${breed} that has ${this.eyes} eyes and ${this.legs} legs.`);

    } 
}

const animal = new Dog("Satchmo", 5, "Chihuahua");

console.log(animal);