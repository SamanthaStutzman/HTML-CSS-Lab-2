
//for loop to count up from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//for loop to count down from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//while loop to count up from 1 to 10
var i = 0;
while (i < 10) {
    i++;
    console.log(i);
}

//while loop to count down from 10 to 1
var i = 11;
while (i > 1) {
    i--;
    console.log(i);
}

//do-while loop to count up from 1 to 10
var i = 0;
do {
  i++;
  console.log(i);
}
while (i < 10);

//do-while loop to count down from 10 to 1
var i = 11;
do {
  i--;
  console.log(i);
}
while (i > 1);

//for-of loop to log all numbers in array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let count of numbers) {
    console.log(count);
    }

//extended challenges second exercise - planet
str = "planet";
while( str.length < 10 ){
    str = " " + str;
}
console.log(str);

//extended challenges second exercise - log
str = "log";
while( str.length < 10 ){
    str = " " + str;
}
console.log(str);