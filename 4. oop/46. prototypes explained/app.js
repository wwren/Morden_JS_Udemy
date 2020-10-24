//object.prototype
//Person.prototype 

function Person(name, lastName, dob){
  this.name = name;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.age = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
} 

const john = new Person('John', 'Smith', '8-12-90');

//calculate age
Person.prototype.age = function(){
  const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function(){
  return `${this.name} ${this.lastName}`;
}

//get married
Person.prototype.getsMarried = function(newLastName){
  this.lastName = newLastName;
}
console.log(john.getFullName());
john.getsMarried('Snow');
console.log(john.getFullName());
console.log(john);

console.log(john.hasOwnProperty('name'));
console.log(john.hasOwnProperty('getFullName')); //return false because getFullName is in prototype not object 
