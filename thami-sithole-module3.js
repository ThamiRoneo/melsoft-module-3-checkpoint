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

// 2. Assignment (at least 3 compound operators)
// Scenario: Interest earned by the beginning of the investment is 0. Three deposits are made at the beginning of each month
// respectively at R100, R200, and R300. Interest per month is calculated at 5% of the total balance. 
// At the end of the second month, R100 was withdrawn.

cartTotal += items[0] + items[1] + items[2]; 
discount *= cartTotal;
vat *= cartTotal;
cartTotal -= discount;
cartTotal += vat;

console.log(`Cart Total by end: R ${cartTotal}`);

// 3. Comparison
// Scenario: 

function signUpValidation() {
  if (User >= 18) {
    if (password.length >= 8) {
      if (typed_email = true && typed_email === confirmed_email) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// 4. Logical
// Scenario: 

if (isUserLoggedIn == true && isUserEmailVerified == true || isUserAdmin == true) {
  return true;
} else {
  return false;
}

// 5. Unary
// Scenario: 

let inputFieldString = '25';
let inputFieldNumber = +inputFieldString;

console.log(inputFieldNumber);

let isDarkMode = false;
if (!isDarkMode) {
  console.log('Light mode');
} else {
  console.log('Dark mode');
}

// 6. Ternary / Conditional
// Scenario: 

if (membershipType === 'premium') {
  console.log('Premium membership');
} else {
  console.log('Free membership');
}

membershipType === premium ? console.log('Premium membership') : console.log('Free membership');

// 7. String concatenation (the + operator doing double duty)
// Scenario:

let firstName = 'Thabo';
let lastName = 'Nkosi';
let age = 28;
let fullName = firstName + ' ' + lastName;

console.log(`Welcome back ${fullName}, you are ${age} years old.`)

/**************************************
* Challenge 2 - The Equality Deep Dive *
**************************************/

// Part A - Predict and verify

0 == false;     // prediction: true
// one-line note: 0 is the same as 'false' in terms of Boolean data type.

0 === false;    // prediction: false
// one-line note: a numeric and Boolean value are not the same, hence the strict equality operator returns false.

"" == 0;        // prediction: true
// one-line note: an empty string is converted to 0 before comparison.

"" === 0;       // prediction: false
// one-line note: strict equality operator compares values and types, so an empty string is not the same as 0.

"0" == 0;       // prediction: true
// one-line note: a string '0' is converted to a numeric 0 before comparison.

"0" === 0;      // prediction: false
// one-line note: strict equality operator compares values and types, so a string '0' is not the same as a numeric 0.

null == undefined;  // prediction: true
// one-line note: null is converted to undefined before comparison, so they are considered equal.

null === undefined; // prediction: false
// one-line note: strict equality operator compares values and types, so null is not the same as undefined.

null == 0;        // prediction: false
// one-line note: null is not converted to 0 before comparison, object type is not equal to number.

null >= 0;        // prediction: false
// one-line note: null is of type object, not a number, so it is not greater than or equal to 0.

null > 0;        // prediction: false
// one-line note: null is of type object, not a number, so it is not greater than 0.

Nan == Nan;        // prediction: false
// one-line note: NaN is a special value that represents not-a-number, so it is not equal to any other value, including itself.

Nan === Nan;       // prediction: false
// one-line note: NaN is a special value that represents not-a-number, so it is not equal to any other value, including itself.

Object.is(Nan, Nan);       // prediction: true
// one-line note: Object.is() compares values and types, so NaN is considered equal to itself.

[1,2,3] == "1,2,3";       // prediction: false
// one-line note: Arrays are compared by reference, not by value, so [1,2,3] is not equal to "1,2,3".

[] == false;       // prediction: false
// one-line note: The empty array is not equal to false, as they are of different types.

[] == 0;       // prediction: false
// one-line note: an empty array is not equal to 0, as they are of different types.

[0] == false;       // prediction: false
// one-line note: an array with a single element is not equal to false, as they are of different types.

// Part B - Real World form validator

const form = document.querySelector('form');
const currentEmail = document.querySelector('#current-email');
const confirmEmail = document.querySelector('#confirm-email');
const newPassword = document.querySelector('#new-password');
const confirmPassword = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (currentEmail.value !== confirmEmail.value) {
    alert('Email addresses do not match');
    return;
  }

  if (newPassword.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }

  if (newPassword.value === currentEmail.value) {
    alert('New password cannot be the same as the current email');
    return;
  }

  if(newPassword.value.length < 8) {
    alert('Password must be at least 8 characters');
    return;
  }

  alert('Form submitted successfully');
});

// I used the strict equality (===) to compare the values of the password fields.
// Yes, my choice matters a lot specifically for the password comparison, because
// it ensures that the values are compared as strings, not as numbers or other types.