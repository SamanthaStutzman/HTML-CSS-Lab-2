// CONDITIONALS EXERCISE
// Heating/Cooling exercise:
// Define two variables: actualTemp and a desiredTemp.
// Write conditionals to tell the heating & cooling system what to do.
// Log one of these three things: Run A/C, Run heat, or Standby.

let actualTemp = 72;
const desTemp = 75;

if (actualTemp !== desTemp) {
    if (actualTemp > desTemp) {
        // Run AC
        console.log("turn on the coldindator...");
    }
    else if (actualTemp < desTemp) {
        // Run heat
        console.log("getting all hot and sweaty...");
    }
} else {
    //Standby
    console.log("standby");
}


// Extended Challenges second exercise:
// Start with two variables:
// tempCelsius (a number) and targetUnit (a string, either “C”, “F”, or “K”).
// Write a switch statement that checks the targetUnit and
// logs the temperature converted to that unit.
// Notes: K stands for Kelvin. C requires no conversion, print out the original temp.

let tempCelsius = -6;
let targetUnit = 'F';

let newTemp = tempCelsius;

switch(targetUnit) {
    case 'K':
        // convert to Kelvin
        newTemp += 273;
        break;
    case 'F':
        // convert to F
        newTemp = newTemp * (9/5) + 32;
        break;
}

console.log(newTemp);


// Write a while loop that will
// adjust the temperature by one
// until it reaches the desired temperature

actualTemp = 72;
desTemp = 75;

console.log('Starting temp: ', actualTemp, ' Desired temp: ', desTemp);

while( actualTemp !== desTemp ) {
    if ( actualTemp < desTemp ) {
        actualTemp++;
    } else {
        actualTemp--;
    }
    console.log(actualTemp);
}


// Write a while loop that will
// (1) Increase by 2
// (2) Decrease by 1
// until it reaches the desired temperature

actualTemp = 72;
desTemp = 75;
console.log('Starting temp: ', actualTemp, ' Desired temp: ', desTemp);
while( actualTemp !== desTemp ) {
    if ( actualTemp < desTemp ) {
        actualTemp += 2;
    } else {
        actualTemp--;
    }

    console.log(actualTemp);
}