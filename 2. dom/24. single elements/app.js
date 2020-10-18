let val;

val = document.getElementById('task-title');
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;

//change style 
document.getElementById('task-title').style.background = '#333';
document.getElementById('task-title').style.padding = '5px';
// document.getElementById('task-title').style.display = 'none';

//change content
val = document.getElementById('task-title').textContent;
document.getElementById('task-title').textContent = 'My Tasks';
document.getElementById('task-title').innerText = 'Whose task';
document.getElementById('task-title').innerHTML = '<span style="color: red"> Task List </span>';
// <span> a generic inline container for phrasing content, which does not inherently represent anything.
//but dont do document.getElementByID so many times, just cast it to a variable 
//good practice
const taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#333';
taskTitle.style.padding = '5px';
taskTitle.textContent = 'My Tasks';
taskTitle.innerText = 'Whose task';
taskTitle.innerHTML = '<span style="color: red"> Task List </span>';

//document.querySelector() --> act like jQuery 
val = document.querySelector('#task-title');
val = document.querySelector('.card-title');
val = document.querySelector('h5'); //will only get first one 
document.querySelector('ul li').style.color = 'red'; //again will only change the first one 
document.querySelector('li:last-child').style.color = 'yellow'; //css pesodu
document.querySelector('li:nth-child(3)').style.color = 'yellow'; //css3 
document.querySelector('li:nth-child(4)').textContent = 'hello world'; //css3 
document.querySelector('li:nth-child(odd)').style.background = '#ccc'; //selector is the single selector


console.log(val);




