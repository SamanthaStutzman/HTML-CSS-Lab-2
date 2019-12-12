


//function wrapping all
vowelCounter = () => {
    
    const word = prompt ("Enter a word or phrase");
    
    //declare array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    
    //declare empty array of new vowels (could be replaced by vowel counter)
    let vowelArray = [];
    
    //for of loop to go through letters of input
    
    //nested a for loop to go through array of vowel
    for (let letter of word) {
        
        // console.log(letter);
        for( let vowel of vowels ) {
            // console.log(vowel, letter)
            if (letter === vowel) {
                //if letter === vowel array[i], array.push into a new array
                vowelArray.push(letter);
            }
        }     
        
        
    } 
    
    //return length of new vowel of array 
    return vowelArray.length;
}

//console.log whole function
console.log(vowelCounter(prompt));