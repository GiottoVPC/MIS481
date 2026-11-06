// single line commment 

/*
    multi line comment 
/*

/* JavaScript Fundementals 
    JS is a lightweight language designed to work in browser envoirment

    semicolon; important to remeber to add them at the end of each expression
    ASI; autmatic semisolon insertion 

    variable -> is a container that can hold a value
    variable declaration;
        - let varName = value;



    mathmatical operations:

    + - * /

    % -> remainder
    ** exponent 

conditionals -> if statements 
if (conditon -> evaluates to true or false 

*/

/*
let x = 5;
console.log(x -= 1);

x = "foster";
console.log(x, typeof(x));
*/

/*let age = 18;
if (age > 21) {
    console.log("You may purchase alcohol.");
}
else {
    console.log("You are not allowed to purchase alcohol")
}
*/

//let a = 5;
//let b = "5";
//console.log(a === b);

// assimgment operator (=), comparison operator (==), identity operator (===).

// Truthy and Falsy 
//let x = 25;
//if (x) {
//    console.log('it is a truthy.');
//}
//else {
//    console.log('it is a falsy.');
//}

// everything in javascript is a truthy except these 7:
//false, 0, -0, null, udenfined, "", NaN (Not a Number)

//let userName = prompt("Enter Your Name: ");
//if (userName) {
//    console.log("Welcome " + userName + "!")
//}
//else {
//    console.log("Please enter a name!")
//}

// for variable naming convention -> camelCase
// all lowercase 1st word followed by first letter upercased subsequent words 
// no use of space, hyphen, or underscore

//let x = 5;
//console.log(isNaN(x));

// for loop vs while loop
// for loop -> for when we know the number of iterations 

// for (for initialization; criteria for iteration; update aka step) {
// acual code to run};

//start from = 0
//ends at = 10
//update = +1

//for (let i=10; i>=0; i-= 2) {
//    console.log(i);
//}

//iter1 => 0 -> true, 0, 0+1
//iter2 => 1 -> true, 1, 1+1
//...
//iter10 => 9 -> true, 9, 9+1
//iter11 => 10 -> true, 10, 10+1
//iter12 => 11 -> false x

//myList = [2, 5, ("a", 1, "c"), 2.5, "orange", "apple"];
//console.log(myList.length);
// console.log(myList(2));

//for (let item of myList) {
//    console.log(item);
//}

// while loop -> when we dont know the number of iterations 
//let y =3;
//while (y < 10) {
//    console.log(y);
//    y++;
//}

// do while loop - the code runs atleast once 
//do {console.log(y);}
//while ( y > 5)

// Functions - 
// a reusable block of code 
// - to reduce the number of lines of code 
// - lower the chances of makinf mistakes
//  - makes changes and updates easier 

// input -> does something -> output
// function funcName(parameters) {
// do something}

//function greeting(userName) {
//    return "Welcome " + userName + "!"
//}

// functions need to be called!
// functions must have return statements 
//let myName = "foster";


//let userGreeting = greeting(myName);
//console.log(userGreeting, typeof(userGreeting));

/*function invoice(price, quantity, taxRate) {
    let subTotal = price * quantity;
    let taxAmount = subTotal * taxRate;
    let total = subTotal + taxAmount; 

    return 'Total: $(total)'
}

itemPrice = 500;
itemQuant = 3;
salesTax = 0.0775;

console.log(invoice(itemPrice, itemQuant, salesTax));
*/


function splitBill(subTotal, taxRate, tipRate , partySize) {
    let taxAmount = subTotal * taxRate;
    let tipAmount = subTotal * tipRate;
    let finalBill = subTotal + taxAmount + tipAmount;
    let perPerson = finalBill / partySize;

    return `Each person pays $${perPerson.toFixed(2)}`;
}

console.log(splitBill(100, 0.08, 0.15, 4));
console.log(splitBill(100, 0.10, 0.15, 4));
