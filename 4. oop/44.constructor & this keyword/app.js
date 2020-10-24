// const brad = {
//   name: 'Brad',
//   age: 30
// };

// console.log(brad);

//constructor method: Person constructor
function Person(name, dob){
  this.name = name;
  this.birthday = new Date(dob);
  this.age = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
} 

// console.log(this); //gives us window object 
// this.alert(1); //alert belongs to window object

// const brad = new Person('Brad',36);
// const john = new Person('John', 30);

const brad = new Person('Brad', '9-10-1981');
console.log(brad.age());