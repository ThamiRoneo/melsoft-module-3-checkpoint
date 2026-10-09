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


/**************************************
* Challenge 3 - Operators Precedence  *
**************************************/

2 + 3 * 4 - 1   // prediction: 13
// step 1: (3 * 4) = 12
// step 2: (2 + 12) = 14
// step 3: 14 - 1 = 13

(2 + 3) * (4 - 1)   // prediction: 15
// step 1: (2 + 3) = 5
// step 2: (4 - 1) = 3
// step 3: 5 * 3 = 15

10 - 4 - 2    // prediction: 4
//  step 1: (10 - 4) = 6
// step 2: 6 - 2 = 4

2 ** 3 ** 2   // prediction: 512
// step 1: (3 ** 2) = 9
// step 2: 2 ** 9 = 512

10 % 3 * 2 + 1    // prediction: 3
// step 1: (10 % 3) = 1
// step 2: (1 * 2) = 2
// step 3: 2 + 1 = 3

100 / 4 / 5   // prediction: 5
// step 1: (100 / 4) = 25
// step 2: 25 / 5 = 5

5 + 2 > 6 && 3 < 4    // prediction: true
// step 1: (5 + 2) = 7
// step 2: (7 > 6) = true
// step 3: (3 < 4) = true
// step 4: true && true = true

true && false || true && true   // prediction: true
// step 1: (true && false) = false
// step 2: (true && true) = true
// step 3: false ||true = true

!false && !!0        // prediction: false
// step 1: !false = true
// step 2: !!0 = false
// step 3: true && false = false

5 > 3 && 10 < 20 || !(2 === "2")       // prediction: true
// step 1: !(2 === "2") = true
// step 2: (5 > 3) = true
// step 3: (10 < 20) = true
// step 4: (true && true) = true
// step 5: true || true = true


1000 * 1.15 * 0.9        // prediction: 1035
// step 1: (1000 * 1.15) = 1150
// step 2: 1150 * 0.9 = 1035

typeof 5 + 1     // prediction: number1
// step 1: (typeof 5) = 'number'
// step 2: 'number' + 1 = 'number1'

typeof (5 + 1)     // prediction: 'number'
// step 1: (5 + 1) = 6
// step 2: typeof 6 = 'number'

"5" + 3 * 2     // prediction: '56'
// stwep 1: (3 * 2) = 6
// step 2: "5" + 6 = "56"

"5" - 3 + 2     // prediction: 4
// step 1: ("5" - 3) = 2
// step 2: 2 + 2 = 4

// Interview answer: Parentheses can be added to an expression even when they are not needed to change the order of operations.
// Again, to aid with readability.

/***************************************************
* Challenge 4 - Ternary and Short-Circuit Patterns *
***************************************************/

// Part A - Ternary chain for grade conversion

const gradingMarks = percentage >= 90 ? 'A' :
                     percentage >= 80 && percentage < 90 ? 'B' :
                     percentage >= 70 && percentage < 80 ? 'C' :
                     percentage >= 60 && percentage < 70 ? 'D' :
                     percentage >= 50 && percentage < 60 ? 'E' :
                     'F';

// Part B - Short-circuit defaults in user profile

let userProfile = {
  displayName: "",
  theme: "",
  maxResults: 0,
  lastLogin: null,
  notificationCount: undefined

};

let displayName = userProfile.displayName || 'Guest User';
let theme = userProfile.theme || 'light';
let maxResults = userProfile.maxResults || 10;
let lastLogin = userProfile.lastLogin ?? 'Never';
let notificationCount = userProfile.notificationCount ?? 0;

// Nullish operator behaves differently because unlike OR operator if there are many operands,
// it returns one that is not nullish. whereas, with the OR operator, it looks from left to right and returns
// the right value if the left is null or undefined.

// Part C - Guard clauses with && and ?.

let user = {
  name: 'David',
  address: {
    street: '15 St',
    city: 'London'
  }
}

const userCity = user && user.address && user.address.city;
const city = user?.address.city;
const address = user?.address ?? 'Unknown city';

// Testing
console.log(userCity);
console.log(city);
console.log(address);

// Part D - Predict the output

null || undefined || 0 || "" || "finally"     // 'finally'
null ?? undefined ?? 0 ?? "" ?? "finally"     //  0
0 || "first truthy"                           // 'first truthy'
0 ?? "first non-nullish"                      //  0
true && false && "never reached"              //  false
"first" && "second" && "third"                //  'third'
false || (true && "yes")                      //  'yes'
(false || true) && "yes"                      // 'yes
1 && 2 && 3                                   //  3
null?.foo?.bar?.baz                           //  undefined


/*******************************************
* Challenge 5 - typeof, instanceof, delete *
*******************************************/

// Part A - typeof masteery

typeof 42                           // 'number'
typeof "hello"                      // 'string'
typeof true                         // 'boolean'
typeof undefined                    // 'undefined
typeof null(THE famous bug)         // SyntaxError
typeof {}                           // 'object'
typeof [](another trap)             // SyntaxError
typeof function () { }              // 'function'
typeof NaN                          // 'number'
typeof undeclaredVariable           //  'undefined'

// one-liner: An array is an reference type 'object', same as other reference types.

// Part B - instanceof with real types

[] instanceof Array                 // true
[] instanceof Object                // true
{} instanceof Object                // true
"hello" instanceof String //(false — why?) - it is because strings literals are primitive values, not objects
new String("hello") instanceof String     // true
42 instanceof Number                      // false
new Date() instanceof Date                // true
/abc/ instanceof RegExp                   // true

// comment: typeof is the right tool when checking for undefined variables is the case, instanceof is wrong,
// because typeof safely returns a string 'undefined' for undeclared variables, whereas, instance of throws
// a ReferenceError. instaceof is the right tool when checking for custom class instances,and typeof is wrong,
// because it always returns 'object' for any custom object, while instaceof correctly identifies if an
// object was created by a specific constructor.


// Part C - delete and its gotchas

// 1.
const user = { name: 'Lerato', age: 25, role: 'student' }
delete.user.role;
console.log(user)      //  before: { name: 'Lerato', age: 25, role: 'student' } after: { name: 'Lerato', age: 25 }

// 2.
let x = 5;
delete x;
console.log(x);
// the log returns 5, why - because delete operator cannot delete a variables, it removes properties from an
// object.

// 3.
const arr = [1, 2, 3, 4];
delete arr[1];
console.log(arr);           // [ 1, <1 empty item>, 3, 4 ]
console.log(arr.length);    // 4
console.log(arr[1]);        // 'undefined'
// comment: delete is dangerous on arrays because it deletes the value but never the index position itself.

// 4.
delete Math.PI;
console.log(Math.PI);   // 3.141592653589793
// comment: first of all is not an object and it is a read-only constant, hence it can never be deleted.

// Interview answer: I would not use delete because delete only removes the value by key and leaves an empty slot,
// instead i could use splice() - it removes the specified element on an array and automatically shifts all the
// the following elements to the left. for example: arr.splice(index, 1) - would remove element on index 1 and shift
// all elements following the removed index to close the empty slot.


/********************************************************
* Challenge 6 - Bitwise Operators & Permission System   *
********************************************************/

const READ = 1;     // binary 0001
const WRITE = 2;    // binary 0010
const DELETE = 4;   // binary 0100
const ADMIN = 8;    // binary 1000

// #1
// binaray steps - to store permission as a single number using OR operator
// means that either one of the bits has to be 1 for the single nuumber to be 1.
//  (1): 0001
//  (2): 0010
//  (3): 0011
let user1 = READ | WRITE;
console.log(user1);    // (3) binary 0011

// #2
// binary         0001
// binary         0010
// binary         0100
// binary         1000
// single number: 1111  (15)
const admin = READ | WRITE | DELETE | ADMIN;
console.log(admin);   // (15)  binary 1111

// #3
let checkRead = user1 & 1 ? 'Yes' : 'No';
console.log(checkRead);       // 'Yes'

// #4
let checkDelete = user1 & 4 ? 'Yes' : 'No';
console.log(checkDelete);     // 'No'

//  #5
user1 |= DELETE;
// WRITE binary : 0001
// READ binary  : 0010
// DELETE binary: 0100
// single number: 0111   (7)
console.log(user1);    // (7) binary 0111

// #6
user1 &~ WRITE;
// READ binary  : 0001
// DELETE binary: 0100
// single number: 0101   (7)
console.log(user1);   // (7) binary 0101

// #7
user1 = READ | DELETE;
toggleAdminOn = user1 ^ ADMIN;
toggleAdminOff = user1 ^ ADMIN ^ ADMIN;
// READ binary  : 0001
// DELETE binary: 0100
// ADMIN binary : 1000    [toggle on]
// single number: 1101   (13)
console.log(toggleAdminOn);   // 13 binary 1101
// READ binary  : 0001
// DELETE binary: 0100
// ADMIN binary : 0000    [toggle off]
// single number: 0101    (5)
console.log(toggleAdminOff);  // 5 binary 0101

// #8
const SUPER_ADMIN = ADMIN << 1;
console.log(SUPER_ADMIN);    // 16 binary 10000

// Interview answers:
// #1: A team would opt to use bitwise flags for permissions instead of storing an array for the following reasons:
// - Performance efficiency: bitwise and checks operate on a single CPU instruction, which enables the program to run faster.
// - Memory and network efficiency: since permissions are stored as single integer they reduce payload size, saving memory.

// #2: The real-world downside of using bitwise permissions is that they are hard to debug, adding new permissions require careful bit
// management to avoid conflicts and a 64-bit integer restricts to unique permission.
// I would not use this pattern when I have less than 30 permissions (fewer).

// #3: The difference lies on evaluation behaviour and operand types.
// The double (&&, ||) operators are logical operators (evaluate operands as Booleans) and they support short-circuiting, meaning they stop evaluating as
// soon as the results are determined.
// The single (&, |) operators are bitwise operators that always evaluate both operands.
// Silent bug case using this challenge's scenario:
 user1 = 3; // Binary: 11 (has both read and write)

// Correct logical check
if (user1 & 1 && user1 & 2) {
  console.log("Has both"); // Works correctly
}

// Incorrect use of bitwise & in place of &&
if (user1 & 1 & user1 & 2) {
  console.log("Has both"); // Silent failure!
}

/**********************************************
* Challenge 7 - Real-World Banking Calculator *
**********************************************/

// Scenario 1 - Savings interest
let initialDeposit = 25000;
let annualInterest = 0.075;
let compoundedMonthly = 12;
let time = 3;
let totalBalance, totalInterestEarned, effectiveAnnualRate;

totalBalance = initialDeposit * (1 + annualInterest / compoundedMonthly) ^ (compoundedMonthly * time);

totalInterestEarned = totalBalance - initialDeposit;

effectiveAnnualRate = ((1 + annualInterest / compoundedMonthly) ** compoundedMonthly) - 1;

console.log(`Total balance after 3 years: R ${totalBalance.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`Total interest earned: R ${totalInterestEarned.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`Annual interest rate: ${effectiveAnnualRate.toFixed(2)}%`);

// Scenario 2 - Tiered account fees
// Test balances
let balance = 500;
//let balance = 1500;
//let balance = 10000;
//let balance = 50000;


// calculating annual fee on balance
let annualFee = balance * 12;

const bankCharges = balance >= 0 && balance < 1000 ? 'R 25' :
  balance >= 1000 && balance < 5000 ? 'R 50' :
    balance >= 5000 && balance < 25000 ? 'R 75' :
      'R 0 (fees waived)';

console.log(`Monthly bank charge fee for this month: ${bankCharges}`);
console.log(`Annual fee on the balance: R ${annualFee.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);

// Scenario 3 - Multi-currency  transfer with floating-point careful
// declaring and assigning variables
let bankCharge = 0.025;
let zarAmount = 15730.33;
let usdExchangeRate = 18.42;

// calculation
let commisonInZar = zarAmount * bankCharge;
let amountAfterCommission = zarAmount + commisonInZar;
let usdAmount = amountAfterCommission / usdExchangeRate;

// logging the results
console.log(`The commission in ZAR: R ${commisonInZar.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`The ZAR amount after commission: R ${amountAfterCommission.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);
console.log(`The USD amount received: $ ${usdAmount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`);


/**************************************
* Challenge 8 - Usr Interaction       *
**************************************/

let greeting;
let namePrompt;
let agePrompt;
let membershipTier;
let subscription = false;
let summary;

greeting = window.alert("Hello, Welcome to JS user interaction :)");
namePrompt = window.prompt('What is your name?');
agePrompt = Number(window.prompt('How old are you?'));
subscription = window.confirm('Do you want to subscribe to our newsletter?');


if (namePrompt == '' | null) {
  namePrompt = 'Guest';
  console.log(namePrompt);

  if (agePrompt != NaN && (agePrompt >= 1 && agePrompt <= 59)) {
    
  } else {
    console.log(prompt.agePrompt)
  }
} else {
  console.log(namePrompt);
}

membershipTier = agePrompt < 18 ? 'Youth' :
  agePrompt >= 18 && agePrompt <= 59 ? 'Adult' : 'Senior';

summary = window.alert(`Name: ${namePrompt}\nAge: ${agePrompt}\nMembership Tier: ${membershipTier}\nNewsletter subscription status: ${subscription}`)
console.log(summary);

/**************************************
* Challenge 9 - Big Hunt              *
**************************************/
// Bugs:
// 1. var item1Price = "199.99"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 2. var item2Price = "49.50"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 3. var quantity = "2"; - is bug because itemPrice variable is assigned to type string instead on a number.
// 4. var isLoggedIn = "true"; - a boolean variable is assigned to a string type.
// 5. var subtotal = item1Price + item2Price + item3Price * quantity; - no parentheses for itemPrice addition
// 6. var discount = discountCode == "SAVE10" ? 0.1 : 0; - == equality is not a strict one and a discount is a discount.
// 7. var canCheckout = isLoggedIn && customerAge > 18; - condition passes even when they wrong instead applying a proper
// ternay chain it is a good fix
//
// Corrected Version:
// // === JUNIOR DEVELOPER'S CART SCRIPT (DO NOT TRUST ANY LINE) ===
var item1Price = 199.99;
var item2Price = 49.50;
var item3Price = 125;
var quantity = 2;
var discountCode = "SAVE10";
var isLoggedIn = false;
var customerAge = 18;
var subtotal = (item1Price + item2Price + item3Price) * quantity;
console.log("Subtotal:", subtotal);
var discount = discountCode === "SAVE10" ? 0.1 : 0;
var discountAmount = subtotal * discount;
var afterDiscount = subtotal - discountAmount;
var vat = afterDiscount * 0.15;
var total = afterDiscount + vat;
var canCheckout = isLoggedIn && customerAge >= 18 ? true : false;
console.log("Can checkout?", canCheckout);
var seniorDiscount = customerAge >= 60 ? total * 0.05 : null;
var finalTotal = total - seniorDiscount;
console.log("Total: R" + finalTotal.toFixed(2));
// === END OF SCRIPT ===
