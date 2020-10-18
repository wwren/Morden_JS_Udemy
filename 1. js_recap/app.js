// LECTURE 6 
// Log to console 
// console.log("hello world"); // strings are black in chrome
// console.log(123); //numbers are blue in google chrome 
// console.log(true);
// var greeting = 'hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a: 1, b: 2, c:3});
// console.table({a: 1, b: 2});

// console.error("This is some error");
// console.clear();

// console.warn("This is a warning");

// console.time("hello");
// console.log("hello word");
// console.log("hello word");
// console.log("hello word");
// console.log("hello word");
// console.timeEnd("hello");
// console.clear();
/*
multiline comment
*/ 
//-------------------------------------------//
// LECTURE 7  - VARIABLES 
// var, let, const 
// var name = 'John Doe';
// console.log(name);
// name = "Steve Smith"; // reassign variables
// console.log(name);

// // init var 
// var greet; // only initiate 
// console.log(greet);
// greet = "Hello";

// // rules & convention of variables: letters, numbers, _, $, also cannot start with number
// // setting variable to jQuery object can use $ to name vairable
// // _name js global frame for private variable

// // multiword variable -> camal case
// var firstName = 'John';

//let 
// let name = 'John Doe';
// console.log(name);
// name = "Steve Smith"; // reassign variables
// console.log(name);

// const
// const name = 'John';

// console.log(name);
// // name = 'Sara' // error: const cannot change
// // const x; //error: needs to be instantiated 

// // const with arrays, object data type different from primitive & strings 
// // const can change but cannot reassign 
// const person = {
//   name: 'John',
//   age: 20
// }

// // person = {name: 'Sara'} //error: cannot reassign 
// person.name = 'Sara'; // can change data inside the object but cannot reassign the object
// person.age = 32;
// console.log(person);

// const numbers = [1, 2, 3, 4, 5];
// numbers.push(6); // can change
// numbers = [2, 3] // error: cannot reassign 
// convention: use const everyone knows this value shouldn't be reassigned 
//-------------------------------------------//
// // LECTURE 8  - DATA TYPES 
// // primitive: string, number, boolean, null (intentional empty value), undefined, symbols (ES6)
// //reference type: arrays, obkect literals, functions, dates, anthing else

// //primitive 
// //string 
// const name = "Johe Doe";
// //number
// const age = 45;
// //boolean 
// const hasKids = true;
// //null
// const car = null;
// console.log(typeof car); //bug in java 
// //undefined
// let test;

// //symbol
// const sym = Symbol();

// console.log(typeof sym);

// // reference type - objects

// //array
// const hobbies = ['movies', 'music'];

// //object literal 
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }

// //date 
// const today = new Date();

// console.log(today);
//-------------------------------------------//
// //LECTURE 9 - TYPE CONVERSION 
// let val;

// // number to string 
// val = String(5555);
// val = String(4+4);
// //bool to string 
// val = String(true);
// //date to string
// val = String(Date());
// //array to string 
// val = String([1,2,3,4]);

// //toString()
// val = (5).toString();
// val = (true).toString();

// // String to number 
// val = '5';
// val = Number(val);
// val = Number(true);
// val = Number(null);
// val = Number("hello"); //NaN not a number 
// val = Number([1,2,3]);

// val = parseInt('1000.03');
// val = parseFloat('1002.34');

// // //output
// // console.log(val);
// // console.log(typeof val);
// // // console.log(val.length);  //only works for string 
// // console.log(val.toFixed(2)); // only works for number, have decimal 

// const val1 = 5;
// const val2 = '6';
// const sum = val1 + parseInt(val2);

// console.log(sum);
// console.log(typeof sum);

//-------------------------------------------//
// // //LECTURE 10 - NUMBERS MATH


// const num1 = 100;
// const num2 = 200;
// let val;

// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// //Math obj -> attribute & methods
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.floor(2.4);
// val = Math.ceil(2.4);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2, 33, 44, 55, 77);
// val = Math.max(2, 33, 44, 55, 77);
// val = Math.random() * 20 ;
// console.log(val);

//-------------------------------------------//
// LECTURE 11 - String method & concatenation 
// const firstName = 'William';
// const lastName = 'Johnson';
// const str = 'Hello there my name is Ran';
// let val;

// //concatenation 
// val = firstName + ' ' + lastName;

// //append 
// val = 'Brad';
// val += ' Traversy';

// //escaping 
// val = "That's awesome";
// val = 'That\'s awesome';

// //length
// val = firstName.length;

// //concat()
// val = firstName.concat(' ', lastName);

// //change case()
// val = firstName.toUpperCase();

// //array indexing
// val = firstName[0];

// //indexOf()
// val = firstName.indexOf('l'); //give me first index of this letter
// val = firstName.lastIndexOf('l');

// //charAt()
// val = firstName.charAt('2');
// //get last char
// val = firstName.charAt(firstName.length -1);

// //substring() 
// val = firstName.substring(0, );

// //slice()
// val = firstName.slice(0, 4);
// //split()
// val = str.split(' ');
// //replace()
// val = str.replace('Ran', 'Rannna'); 

// console.log(val);

//-------------------------------------------//
// LECTURE 12 - TEMPLATE LITERAL
// const name = 'John';
// const age = 30;
// const job = 'web developer';
// const city = 'Miami';
// let html; 

// //without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job '+ job + '</li><li>City: ' + city + ' </li></ul>';

// function hello(){
//   return 'hello';
// }
// // with template string/ literal 
// html = `
//   <ul>
//     <li>Name: ${name} </li>
//     <li>Age: ${age} </li>
//     <li>Job: ${job} </li>
//     <li>Job: ${job} </li> 
//     <li>City: ${city} </li>
//     <li>${2+2} </li>
//     <li>${hello()} </li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'} </li>
//   </ul>
// `
// document.body.innerHTML = html; //very messay //cannot see the html structure 



//-------------------------------------------//
// LECTURE 13 - ARRAYS
// const numbers = [43, 56, 77, 98, 102, 5, 23];
// const numbers2 = new Array(22, 45, 67, 89);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 2}, new Date()];

// let val;

// //get array length 
// val = numbers.length;
// //check if it is array 
// val = Array.isArray(numbers);
// //get single value
// val = numbers[3];
// val = numbers[0];
// //insert into array 
// numbers[2] = 100;
// //find index of value 
// val = numbers.indexOf(43);

// // //mutating array 
// // numbers.push(250); //add on to the end 
// // numbers.unshift(120); //add on to the front 

// // numbers.pop(); //take off from the end 
// // numbers.shift() //remove from the beginning 

// // numbers.splice(1, 1); //remove where start how many to take 

// // //reverse 
// // numbers.reverse();

// //concat array
// val = numbers.concat(numbers2); 

// //sort 
// // val = numbers.sort(); // not doing what we want, need compare function 
// // numbers.sort(function(x, y){return x-y;});

// //find 
// function under50(num){
//   return num < 50;
// }

// val = numbers.find(under50); //find the first number in array that is under 50

// console.log(numbers);
// console.log(val);

//-------------------------------------------//
// LECTURE 14 - OBJECT LITERAL 
// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30, 
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL'
//   },
//   getBirthYear: function(){
//     return 2017 - this.age;
//   }
// }

// let val;

// val = person;

// val = person.firstName;
// val = person['firstName'];
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['state'];
// val = person['address']['state'];
// val = person.getBirthYear();

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Steve', age: 45},
// ]

// console.log(val);

//-------------------------------------------//
// LECTURE 15 - DateTime 
// let val;

// const today = new Date(); 
// let birthday = new Date('9-10-1981');

// birthday = new Date('9/10/1981');
// birthday = new Date('Sep 10 1981');

// val = today.toString();
// val = birthday;
// val = today.getMonth(); //0 based 
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();

// birthday.setMonth(6);
// birthday.setDate(1);
// //... 

// console.log(birthday);

//-------------------------------------------//
// LECTURE 16 - IF-ELSE STATEMENT 
// const id = 100;

// if (typeof id !== 'undefined' ){ //want to test if id is defined
//   console.log(`The ID is ${id}`); //template string/literal 
// } else{
//   console.log('No ID');
// }

// //logical operator: || &&
// //ternary operator
// console.log(id === 100 ? 'equal': 'not equal');

// //with braces is recommended

//-------------------------------------------//
// LECTURE 17 - SWITCH STATEMENT 
// let day;

// switch(new Date().getDay()){
//   case 0:
//     day = "Sunday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Workday";
// }

// console.log(`Today's day is ${day}.`);

//-------------------------------------------//
// LECTURE 18 -FUNCTIONS  
// function greet(firstName = 'John', lastName = 'Doe'){
//   // console.log('Hello');
  
//   return `Hello ${firstName} ${lastName}`;
// }

// greet();
// // console.log(greet());

// //function expression 
// const square = function(x=3){
//   return x*x;
// };

// // console.log(square());

// // immidiateley invikable function expressions - IIFES
// // (function() {
// //   console.group('IIFE Ran..');
// // })();

// // (function(name) {
// //   console.group(`Hello ${name}`);
// // })('Ran');

// //property methods
// const todo = {
//   add: function() {
//     console.log('Add todo...');
//   }, 
//   edit: function(id) {
//     console.log(`Edit todo ${id}`);
//   },
//   delete: function(){
//     console.log('Delete todo...')
//   }
// }

// todo.add();
// todo.edit(22);
// todo.delete();

//-------------------------------------------//
// LECTURE 19 - GENERAL LOOPS 

// for loop 
// for (let i = 0; i< 10; i++){
//   if (i === 2 ){
//     console.log("2 is my favourite number");
//     continue; //keep going to the next iteration 
//   }

//   console.log(`Number: ${i}`);
// }

//while loop
// let i = 0;

// while(i < 10){
//   console.log(`Number: ${i}`);
//   i++;
// }
// const car = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// //for each
// car.forEach(function(current, index, array){
//   console.log(`${index}: ${current}`);
//   console.log(array);
// });

//map 
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'}
// ]

// const ids = users.map(function(current){
//   return current.id;
// })

// console.log(ids);

//for-in loop 
// const user = {firstName: 'John', lastName: 'Doe', age: 40};

// for(let x in user){ //for in loop
//   // console.log(x); //gives us the key
//   console.log(`${x}: ${user[x]}`);
// }

//---------------------------------------------//
//Lecture 20 - WINDOW OBJECT 
// window/ browser object is the global object for client side
// computer system is the environment for node.js
// WINWOS, METHODS, OBJECTS, PROPERTIES 
// console.log(123);

//Alert
// alert('hello world');

//prompt
// const input = prompt(); //take an input 
// alert(input);

//confirm
// if (confirm('Are you sure')){
//   console.log('Yes');
// } else{
//   console.log('No');
// }

// let val;

// //outter height and width 
// val = window.outerHeight;
// val = window.outerWidth;

// //inner height and width 
// val = window.innerHeight;
// val = window.innerWidth;

//scroll points
// val = window.scrollY; //scroll bar
// val = window.scrollX; //scroll bar

// //location object 
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search; // important 

//redirect 
// window.location.href = 'http://google.com'; //external url

//reload 
// window.location.reload();

//history pbject
// window.history.go(-2);
// val = window.history.length;

// // navigator object 
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);

//---------------------------------------------//
//Lecture 21 -  scope for let & const 
// var a = 1;
// let b = 2;
// const c = 3;

// function test () {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('Local scope: ', a, b , c);
// }
// test();

// block scope 
// if(true){
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log('If scope: ', a, b, c); //var a will change after this, but let & const will not
// }

// for (var a = 0; a < 10; a++){
//   console.log(`Loop: ${a}`);
// } //var a will change a in global scope 

// console.log('Global scope: ', a, b, c);