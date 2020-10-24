//ES6 classes -> syntax sugar 
class Person{
  constructor(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1979);
  }

  getsMarried(lastName){
    this.lastName = lastName;
  }

  static addNumbers(x, y){
    return x+y;
  }
}

const mary = new Person('Mary', 'Williams', '11-13-1980');
mary.getsMarried('Smith');
console.log(mary.greeting());
console.log(Person.addNumbers(1, 2));