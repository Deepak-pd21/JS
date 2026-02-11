// variable: a container that store value.
//  1.declaration    let x;
//  2.assignment  x= 100;

/* VARIABLE TYPES*/

// NUMBERS (VARIABLE TYPE)

//  let age = 22;
//  let price = 12.99;
//  let gpa = 2.1;
//  console.log("gpa");
//  console.log(`You are ${age} years old ?`);
//  console.log(`does it cost $${price} for real!!!`);
//  console.log(`i just got my gpa checked its ${gpa}`);
//  console.log(typeof gpa , typeof price);
 
/*----------------------------------------------------------------------------------------------------------------------------------------*/

// STRING (VARIABLE TYPE)

// let firstName = "Jango";
// let Favsports = "Football";
// console.log(firstName);
// console.log(typeof firstName);
// console.log(`Youre name is ${firstName}?`);
// console.log(`So you do like ${Favsports}`);
// console.log(`${firstName} always like ${Favsports} i know that.`);

/*-------------------------------------------------------------------------------------------------------------------------------- */

// BOOLEANS (VARIABLE TYPE)
// let online = false;
// let sold = true;
// console.log(`jango is now online: ${online}`);
// console.log(`The new car has already been sold out: ${sold}`);

// let fullName = "Jango";
// let age = 25;
// let student = false;

// document.getElementById("p1").textContent = `your name is ${fullName} right?`;
// document.getElementById("p2").textContent = `its given your age is ${age}`;
// document.getElementById("p3").textContent = `are you a student now: ${student}`;

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------- */

/* arithmetic operators */  //-> operands (values, variables, etc)
                            // operators (+,-,*,/,**(exponent))
                            // exmple:   11 = x + 5;
                            
let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//students = students % 2; //gives reminder(modulus operator)

/* Augmented assignment operators */

// students += 3;
//students -= 1;
//students *= 2;
//students /= 2;
//students **=2;
//students %= 2;

/*increment decremnt opertr */

//students++;
//students--;

//console.log(students);

/* 
OPERATOR PRECEDENCE
1. parenthesis()
2. exponents
3.multiplication & division & modulus
4. addition & subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);
