" use strict ";




//Declare arrow function
//named randomDamage
//has no parameters 
//returns a random integer between 1 and 10
/**
* Returns a random number between 1 and 10
* 
* @todo     Random number generator between 1 and 10
* @param    None
* @return   Returns a random number between 1 and 10
* 
*/

const randomDamage = _ => Math.floor(Math.random() * 10) + 1 ;




//Declare an arrow function
//named chooseOption
//has two parameters named opt1 and opt2
//chooseOption does two things:
//Declares and initializes a variable named randNum to either a 0 or 1, randomly.
//Returns opt1 if randNum is equal to 0 otherwise return opt2 , use a ternary operator
/**
* Returns a random number between 0 and 1 that picks either option 1 or option 2
* 
* @todo     Picks option 1 or option 2
* @param    {string} opt1
* @param    {string} opt2
* @return   Returns option 1 or option 2
* 
*/

const chooseOption = ( opt1, opt2 ) => {
    const randNum = Math.round(Math.random());
    return randNum === 0 ? opt1 : opt2;
};




//Declare a function expression 
//named attackPlayer 
//has one parameter, named health 
//returns a number equal to health minus the product of the randomDamage function
/**
* Does damage to health
* 
* @todo     Does damage to health
* @param    {string} health
* @return   Returns what
* 
*/

const attackPlayer = ( health ) => health - randomDamage();




//Declare arrow function
//named logHealth
//has two parameters, player and health
//console.log "player health: health ”
/**
* Logs player health
* 
* @todo     Logs player health
* @param    {string} player
* @param    {string} health
* @return   Logs health for that player
* 
*/

const logHealth = ( player, health ) => { console.log (`${player} health = ${health}`) };




//Declare arrow function 
//named logDeath 
//has two parameters, winner and loser 
//console.log “ winner defeated loser ”
/**
* Logging winner defeating loser
* 
* @todo     Logs winner
* @param    {string} winner
* @param    {string} loser
* @return   Logs winner defeated loser
* 
*/

const logDeath = ( winner, loser ) => { console.log (`${winner} defeated ${loser}`) };




//Declare arrow function 
//named isDead 
//has one parameter, health 
//returns a boolean value of true or false based on the following condition: health <=0;
/**
* Find our if player is dead
* 
* @todo     Determines if health is less than or equal to 0
* @param    {number} health
* @return   Returns true or false
* 
*/

const isDead = ( health ) => { return health <= 0 ? true : false };




//Declare a function declaration 
//named fight  
//has four parameters = player1, player2, player1Health, player2Health

/**
* Fighting function
* 
* @todo     Starts the fight
* @param    {string} player1
* @param    {string} player2
* @param    {number} player1Health
* @param    {number} player2Health
* @return   Returns a winner
* 
*/

const fight = ( player1, player2, player1Health, player2Health ) => {
    while (true) {
        
        const attacker = chooseOption ( player1, player2 );
        
        if (attacker === player1) {
            
            player2Health = attackPlayer ( player2Health );
            
            logHealth ( player2, player2Health );
            
            if ( isDead (player2Health) === true ) {
                logDeath ( player1, player2 );
                break;
            }
            
        } else {
            
            player1Health = attackPlayer (player1Health);
            
            logHealth (player1, player1Health);
            
            if ( isDead (player1Health) === true ) {
                logDeath ( player2, player1 );
                break;
            }
            
        }
        
    }
};




// Within the fight function, write a while loop that loops while true
// Declare and initialize a variable named attacker equal to the chooseOption function with player1 and player2 as arguments


// Has an if statement that is triggered when attacker is equal to player1
// Set player2Health equal to the product of attackPlayer with player2Health as its argument
// Calls the logHealth function with player2 and player2Health as its arguments
// Has an if statement that runs if the product of isDead , with player2Health as an argument, equates to true. If true:
// Call the logDeath function with player1 and player2 as arguments
// Break


// Has an else statement that:
// Sets player1Health equal to the attackPlayer function with player1Health as its argument
// Call the logHealth function with player1 and player1Health as its arguments

// Has an if statement that runs if the product of isDead with player1Health as an argument equates to true. If true:
// Call the logDeath function with player2 and
// player1 as arguments
// Break