/*
    Javascript Exercises For Beginners
    ==================================

    Beginner Exercises: Part 1
    --------------------------

    Exercise 1:

    Write a Javascript Program to check 2 numbers and 
    return "true" if one of the numbers is 100 or if the sum of the 2 numbers is 100.
*/

const isEqualTo100 = (a, b) => a === 100 || b
=== 100;

// CASE 1:

console.log(isEqualTo100(100,0)); // PRINT THE SUM OF THIS 2 NUMBERS EQUALS TO 100 AND RETURNS TRUE (a,b).
console.log(isEqualTo100(0,100)); 

// CASE 2:

console.log(isEqualTo100(10,0)); // PRINT THE SUM OF THIS 2 NUMBERS EQUALS TO 100 AND RETURNS TRUE (a,b).
console.log(isEqualTo100(0,10)); 

// CASE 3:

console.log(isEqualTo100(20,80)); // PRINT THE SUM OF THIS 2 NUMBERS EQUALS TO 100 AND RETURNS TRUE (a,b).
console.log(isEqualTo100(50,50)); 

/*
    Exercise 2:
    -----------

    Write a Javascript Program to get the
    extension of a filename.
*/

const getFileExtension = (str) => str.slice
(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));

/*
     Exercise 3:
     -----------

     Write a Javascript Program to replace every
     character in a given string with the character
     following it in the alphabet.
*/

// String.fromCharCode
// charCodeAt

const moveCharsForward = (str) =>
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt
    (0) + 1))
    .join('');

console.log(moveCharsForward('abcd'));

/* Exercise 4:
   -----------

   Write a Javascript program to get the current
   date.

   Expected Output:
   mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy.

*/

const formatDate = (date = new Date()) => {
    const days = date.getDay();
    const months = date.getMonth();
    const years = date.getFullYear();

    return `${days}/${months}/${years}`;
}

console.log(formatDate());