// //set local storage item 
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');

//set session storage item 
sessionStorage.setItem('name', 'Beth'); //once close blowser sessionStorage item is gone

// remove from storage 
// localStorage.removeItem('name');

// get from storage
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

//clear local storage 
// localStorage.clear();

//submit event 
document.querySelector('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value;

  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task Saved');
  e.preventDefault();
})

const tasks = JSON.parse(localStorage.getItem('tasks'));
// console.log(typeof(tasks));

tasks.forEach(function(curr){
  console.log(curr);
})