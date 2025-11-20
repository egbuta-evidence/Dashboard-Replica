// originally javascript was called ECMA SCRIPT

// console
// varaible declartion
// data Types

console.log("hello Evidence  good to have you today"); // any variable that has a bracket beside it is called a method

// console.log(1 + 1);

// 12345678
// 01234567

// javascript is a Zero based index langueage

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

// let and const are the mordern variable declaration keywordqqqqqqqqqqqqqqqqqqq
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

const continent = {
  africa: {
    countries: {
      west: ["Nigeria", "Ghana"],
      south: ["South-africa"],
    },
  },
  asia: {
    countries: {
      west: ["China", "India"],
      south: ["Mongolia"],
    },
  },
};
continent.africa.countries.west[2] = "Tanzania";
// object

// array is a java script property that allows the storage of multiple value to a single variable
const item = [
  "bags",
  "shoes",
  "clothes",
  1,
  false,
  { name: "promise", age: 10 },
  null,
];
// let result = item;

item[7] = "Evidence";

// console.log(result);

//  objects and arrays

let items = ["shoes", "bags", "clothes"];

items[3] = "ring";

// console.log(items);

// console.log(items[1]);

// spread operator
let fruits = ["mango", "apples", "banana"];

let girs = ["destiny", "favour", "Evidence"];
let boys = ["james", "obi", "charles"];

let reSult = [...girs, ...boys];

// console.log(reSult);

let newFruites = [...fruits, "watermelon"];

let person = {
  name: "Promise",
  isOutstanding: true,
  age: 15,
  status: null,
};

let siblings = {
  brother: "james",
  sister: "Amaka",
};

let newPerson = { ...person, ...siblings };

let changedPerson = { ...newPerson, accountBalance: BigInt(21828283838282) };

// the delete helps remove an value form the object property
// delete person.sex;

// console.log(changedPerson);

// Destructuring
// let { status, age } = person;

// let { brother, sister } = siblings;

// console.log(brother);

// let property = ["Money", "Houses", "Cars"];

// let [ThridValue, secondValue, firstValue] = property;

// console.log(firstValue);

// array methods
// object methods

let val; // undefined
// camel casing

// let #name = '' wrong
//  let 2 = '' wrong
//  let + = '' worng
//  let _user = 'tolu' good
//  let userName  = 'something' camel casing

//  pascal casing
// let

// string methods
// number methods

// string method

// length property returns the number of characters in a string

// val = "Evidence";

// let result = val.length;

// toUpperCase() coverts all letters to uppercase

// val = "promise";
// result = val.toUpperCase();
// console.log(result);

// toLowerCase() converts all letters to lowercase
// val = "PROMISE";

// result = val.toLowerCase();

// console.log(result);

// concactination adding of sting values

// let firstName = "promise";
// let lastName = " richard";
// let intro = "my name is ";

// Template string

// let fullName = intro + firstName + lastName;
// let modifiedFullName = `my name is ${firstName} ${lastName} i am a developer`;

// console.log(fullName);
// console.log(modifiedFullName);

// charAt() method returns the character at a specific position via the index number
// val = "James";
// let result = val.charAt(3);
// console.log(result);

// indexOf() find the position of the first occurence of a character or word "if position is not found it automatically returns -1"

// val = "I love JavaScript";
// result = val.indexOf("J");
// console.log(result);

// lastIndexOf() find the position of the last occurence of a character or word "if position is not found it automatically returns -1"
// val = "I lovel JavaScriptJ";
// result = val.lastIndexOf("l");
// console.log(result);

// includes() checks if a string contains a specific word of character , returns true or false

// val = "Banana hate";
// let result = val.includes("hate");
// console.log(result);

// startsWith() checks if a string starts with a specific word or character or letter or alphabet, returns true or false

// val = "Portharcourt";
// let result = val.startsWith("P");
// console.log(result);

// endsWith() checks if a string ends with a specific word or character or letter or alphabet, returns true or false
// val = "Portharcourt";
// let result = val.endsWith("P");
// console.log(result);

// slice(start,end) extracts part of a string
// val = "javaScript";
// let result = val.slice(4);
// console.log(result);

// substring() same as slice

// replace(oldvalue, newValue) it replaces characters in a string
// val = "Promise is a good tutor";
// let result = val.replace("good tutor", "worst tutor ever");
// console.log(result);

// trim() removes extra spaces form both ends of a string
// val = "      promise       ";
// let result = val.trim();
// console.log(result);

// trimStart() removes spaces from the start
// val = "      promise       ";
// let result = ` hello ${val.trimStart()} how are u`;
// console.log(result);

// trimEnd() removes spaces form the end
// val = "      promise       ";
// let result = `hello ${val.trimEnd()} how are u`;
// console.log(result);

// split(separator) Breaks a sting into an array based on the seperator
// val = "Apple,Banana ,orange ,mango";
// let result = val.split(",");
// console.log(result);

// toString() converts datatypes to string
// val = 200;
// let result = val.toString();
// let result = String(val);
// console.log(typeof result);

// number methods

// number method rounds up numbers
// val = "1";
// let resullt = Number(1.4);

// console.log(val);

// toFixed() rounds up number to fixed value and returns a string

// val = 9.5548484;
// let result = val.toFixed();

// console.log(typeof result);

// toPrecision() formats a number to a specific length
// val = 3.123456;
// let result = val.toPrecision(5);
// console.log(result);

// valueOf()  returns a primitive value
// val = 50;
// console.log(typeof val.valueOf());

// isNaN() checks if a value is not a number
// val = 20;
// let result = Number.isNaN(val);
// console.log(result);

// perseInt() converts a string to a number
// val = "20";
// let result = parseInt(val);
// console.log(typeof result);

// perseFloat() converts a string to a decimal
// val = "12.6";
// let result = parseFloat(val);
// console.log(result);

// Number() converts other data types to a number "if covert a boolean it returns either 1 or 0 , true retuns 1, false return 0"
// val = Number(false);
// console.log(val);

// maths methods
// maths.Cos(), Math.sin(), Math.tan(),  Math.log()

// val = Math.tan(30);
// console.log(val);

// Math.round() approximates decimals

// val = 4.5;
// let result = Math.round(val);
// console.log(result);

// Math.floor() approximats downwards
// val = 4.9;
// let result = Math.floor(val);
// console.log(result);

// Math.ceil() approximats upwards
// val = 4.1;
// let result = Math.ceil(val);
// console.log(result);

// Math.trunc() removes the decimal part , leaving only the integers

// val = 1.344;
// let result = Math.trunc(val);
// console.log(result);

// Math.pow(x,y) takes in two arguments
// val = Math.pow(10, 2);
// console.log(val);

// Math.sqrt()

// val = 16;
// console.log(Math.sqrt(100));

// Math.absolute() returns a positive value always

// val = -2;
// console.log(Math.abs(val));

// Math.max() return the greatest mumber

// val = Math.max(1, 3, 5, 200);
// console.log(val);
// Math.min() return the smallest number

// val = Math.min(3, 5, 200);
// console.log(val);

// Math.random() returns a random number between 0 and 1
// val = Math.random();
// console.log(val);
// val = Math.floor(Math.random() * 101);
// console.log(val);

// non primitive data types
// object
// arrays
// function is javascript non primitive data type,,its block of code that contains an alghorithm(its a seqence of instructions to carry a task)
// properties of a function
// declaration
// function name
// parameters or arguments
// function block
// return key word

// function greetUser(personName) {
//   const greeting = `hello welcome to my website ${personName}`;
//   const fireUser = `u are fired ${personName}`;
//   return greeting;
// }

// let result = greetUser("Promise");

// console.log(result);

function doMaths(value1, value2) {
  const add = value1 + value2;
  const divide = value1 / value2;
  const random = Math.floor(Math.random() * value1);
  const subtract = value1 - value2;
  const squareRoot = Math.sqrt(value1);
  return random;
}

result = doMaths(10, 20);
console.log(result);

// funtion

// function greetPerson(personName) {
//   console.log(personName);
//   alert("you are welcome to my site ");
// }

// greetPerson("user");

// self calling function
// (function (person) {
//   let result = `you are welcome ${person}`;
//   return console.log(result);
// })("James");

// let calculate = function () {
//   return 5;
// };

// let result = calculate();
// console.log(result);

// arrow function

// let doSOmething = (person) => {
//   let result = `you are welcome ${person}`;
//   return console.log(result);
// };

// doSOmething("Admin");

// conditionals (if and else statement)
// tenary opperator(a short way of writing conditonals)
// and means && , or ||

// let vlaue = "3";
// let loggedIn = true;
// let fruit = "mango";
// fruit = "banana";
// fruit = "apple";
// fruit = "watermellon";

// let applicantAge = 14;

// applicantAge = 26;

// if (applicantAge <= maximumAge || applicantAge >= minimumAge) {
//   let result = `welcome you of age range`;
//   console.log(result);
// } else {
//   let result = `sorry ${applicantAge} is out of range , you can not apply`;
//   console.log(result);
// }

// if (fruit === "mango") {
//   console.log("the fruit is mango ");
// } else if (fruit === "apple") {
//   console.log("the fruit is now apple");
// } else if (fruit === "banana") {
//   console.log("the fruit is now banana");
// } else {
//   console.log("sorry the fruit does not exist here");
// }

// assignment
// == base check/compare ,  === strict check/compare
// ! means "ISnOT" "FALSE"

// if (vlaue !== "2") {
//   console.log("you are correct");
// } else {
//   console.log("you are wrong");
// }

// if (1 > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// tenary operator

// let color = "Black";

// color === "Blue"
//   ? console.log(" the color is blue")
//   : console.log("the color is not blue");
// let minimumAge = 16;

// let maximumAge = 25;
// function checkAge(applicantAge) {

//   if (applicantAge <= maximumAge && applicantAge >= minimumAge) {
//     let result = `welcome you of age range`;
//     console.log(result);
//   } else {
//     let result = `sorry ${applicantAge} is out of range , you can not apply`;
//     console.log(result);
//   }
// }

// checkAge(30);

// checkAge(16);
// checkAge(10);

//  (array methods)
items = ["shoe", "bags", "clothes"];
// itemS.pop();

// pop() remove from the end of an array

// let result = itemS.pop();
// console.log(itemS);
// console.log(result);

// push() adds to the end of an array

// items.push("cash");
// console.log(items);

// shift() removes from the begining of an array

// items.shift();
// console.log(items);
// let result = items.shift();
// console.log(result);

// unShift() adds to the begining of an array

// items.unshift("cash");
// console.log(items);

// concat() joins an array

// let a = [1, 2];
// let b = [3, 4];

// let c = a.concat(b);

// console.log(c);

// slice() copy part of the array (does not change the origainal array

// let letters = ["a", "b", "c", "d", "e", "f"];

// let part = letters.slice(1, 4);

// console.log(letters);

// console.log(part);

// includes() checks the array and returns a boolean

// let names = ["james", "john", "peter"];

// let result = names.includes("sam");

// console.log(result);
