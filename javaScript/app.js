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
