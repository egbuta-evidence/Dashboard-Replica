// originally javascript was called ECMA SCRIPT

// console
// varaible declartion
// data Types

console.log("hello Evidence  good to have you today"); // any variable that has a bracket beside it is called a method

// console.log(1 + 1);

// variable declaration
// let name = "Promise";

//  there are three types of variable declartion key word
// let
// const
// var

// let user = "Admin";
// const user = "Service provider";
// var user = "consumer";

// console.log(user);

// let and const are the mordern variable declaration keyword
// var is the old depreciated variable declaration keyword during the es5 version

// the let keyword allow future change in its value
// the const keyword does not allow change at all in its value

// name = "Evidence";

// console.log(name);
// var user = "Admin";
// let user = 'admin'

// const greetUser = () => {
//     let user = 'something'
//   alert("hello user you are welcome to this page ");
// };

// user = "Loan officer";

// var is a global scope variable declarator and it is also redeclarable
// let and const are block scope variable declarator its not redeclarable

// console.log(user);

// var user = "testing";

// var user = "james";

// console.log(user);

// data types
// primitiive data types and non primitive data types

// Primitive data types - simple and straightfoward
// String == anything you put in a single or double quote  " ",, ' '

let name = "12212323230-==@+_=";

console.log(typeof name);

// number
let value = 32.0;
console.log(typeof value);

// boolean = is a true or false statement

let example = 4 > 3;

let itsConfirmed = false;

console.log(typeof example);

// undefined ==  when a variable is not assigned to any value

let test;

console.log(typeof test);

// null == empty on pupose or intentional emptiness
let time = null;

//  bigInt
let bigNumber = 12234344848949940n;
bigNumber = BigInt(123454832934823829292939299999);

console.log(typeof bigNumber);

// non - promitive (reference types ) -more complex "eg objects arrays"

// object === ans object is a make up of properties

let person = {
  name: "Promise",
  isOutstanding: true,
  age: 15,
};

console.log(person.name);
