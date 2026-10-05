/**************************************
* Challenge 1 - Operators Masterclass *
**************************************/

// 1. Arithmetic (3 operators minimum, including modulo)
// Scenario: Calculate a total time (in hours and minutes) that Student A and Student B
// spent studying together on a module this week. They respectively studied for 1439
// and 1252 minutes.

// declaring and assigning values to variables
let studentA = 1439;
let studentB = 1252;
// declaring and assigning the variable to calculating total study time of students
let totalMinutes = studentA + studentB;
// declaring and assigning the variable to calculate hours
let hours = Math.trunc(totalMinutes / 60)
// declaring and assigning the variable to calculate minutes
let minutes = totalMinutes % 60;
// console logging the result
console.log('1. Arithmetic (3 operators minimum, including modulo');
console.log(`Total study time for Student A and Student B: ${hours} hours and ${minutes} minutes\n`);


