"use strict";

let position = 0;
let forward = true;

// moveForward : takes a distance parameter. Move the character forward (based on the direction they are facing) the specified distance.
const moveForward = distance => {
    if (forward) {
        position += distance;
    }else {
        position -= distance;
    }
}

// moveBackward : takes a distance parameter. Move the character backward (based on the direction they are facing) the specified distance
const moveBackward = distance => {
    if (forward) {
        position -= distance;
    }else {
        position += distance;
    }
}
    
    // turnAround : reverse the direction the character is facing
    const turnAround = _ => {forward = !forward};
    
    // printLocation : logs the current position to the console
    const printLocation = _ => {console.log(position)};
    
    
    {
        // moveForward 5
        moveForward(5);
        
        // moveBackward 3
        moveBackward(3);
        
        // printLocation … should print 2
        printLocation();
        
        // turnAround
        turnAround();
        
        // moveForward 10
        moveForward(10);
        
        // moveBackward 5
        moveBackward(5);
        
        // printLocation … should print -3
        printLocation();
        
    }
    