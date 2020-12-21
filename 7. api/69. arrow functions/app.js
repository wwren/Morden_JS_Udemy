//one line function doesn't need braces
// const sayHello = () => console.log('Hello');
const sayHello = () => 'Hello';
const sayHelloObject = () => ({msg: "Hello"});
// sayHello();
console.log(sayHello());
console.log(sayHelloObject());


const sayHelloPara = (name) => console.log(`Hello ${name}`);

sayHelloPara('Ran');

//Use arrow function as callbacks 
const users = ['Nathan', 'John', 'William'];

const nameLength = users.map(name => name.length);

console.log(nameLength);