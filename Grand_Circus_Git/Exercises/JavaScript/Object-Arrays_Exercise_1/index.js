
//each character is an object with two properties--name and health
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = health;
    }
}

let character1 = new Character("John", 10);
let character2 = new Character("Sam", 12);
let character3 = new Character("Will", 14);

//array of three characters
let characterArray = [character1, character2, character3];

//object outside the array in a variable called opponent with two properties--name and health
let opponent = new Character("Challenger", 8);
characterArray.push(opponent);

//loop
//Prints out the name and health of all three characters plus the opponent
for (i = 0; i < characterArray.length; i++) { 
    console.log(characterArray[i]);   
}

//Prompts the user to pick a character by number (1, 2, or 3)
let characterPicked = prompt ("Please pick character 1, 2, or 3.");

if (characterPicked === "1") {
    console.log("You have picked " + character1.name + " with " + character1.health + ".");
} if (characterPicked === "2") {
    console.log("You have picked " + character2.name + " with " + character2.health + ".");
} if (characterPicked === "3") {
    console.log("You have picked " + character3.name + " with " + character3.health + ".");
}







//Exit the loop when the user response is null, which means that the cancel button was clicked.






//Challenge:
//Do not allow a character with zero or less health to engage in battle
//Check for invalid input (must be number between 1 and 3
//Automatically end the program when the opponent health hits zero or all of the characters’ health has hit zero. Display a “win” or “lose” message.