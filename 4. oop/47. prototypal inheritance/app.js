// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName; 
}

Person.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');

//customer constructor 
function Customer(firstName, lastName, phone, membership){
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}
//inherit person prototype methods
Customer.prototype = Object.create(Person.prototype); //inside Customer will have a Person prototype 

//Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

//create customer
const customer1 = new Customer('Tom', 'Smith', '555-555-5555');
console.log(customer1);

//customer greeting
//override
Customer.prototype.greeting = function(){
  return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company.`
}
console.log(customer1.greeting()); //not yet inheriting prototype, if not first make Customer inherit Person's prototype methods

