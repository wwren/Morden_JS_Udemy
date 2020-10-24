// String

const name1 = 'Jeff';
const name2 = new String(name1); //treat it as an object

// name2.foo = 'bar'; //since it is object can add attribute 


console.log(typeof name1);

if (name2 == 'Jeff'){
  console.log('Yes');
}else {
  console.log('No');
}

// Numbers
const num1 = 5;
const num2 = new Number(5);

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

//Function
const getSum1 = function(x, y){
  return x+y;
}

const getSum2 = new Function('x', 'y', 'return 1+ 1');

//object 
const john1 = {name: 'john'};

const john2 = new Object(john1);

//Array 
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

//regular expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+'); // to escape '\'

console.log(re1);