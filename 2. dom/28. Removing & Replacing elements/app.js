//Replace element 

//create element 
const newHeading = document.createElement('h2');

newHeading.id = 'task-title';
newHeading.appendChild(document.createTextNode('Task List'));

//get the old heading 

const oldHeading = document.getElementById('task-title');

//Parent 
const cardAction = document.querySelector('.card-action');
cardAction.replaceChild(newHeading, oldHeading);

//Remove element 
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

lis[0].remove();

list.removeChild(lis[1]);

//classes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

val = link.className;
val = link.classList; //token list
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');
val = link;

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('title');
val = link.setAttribute('title', 'google');
val = link.removeAttribute('title');
val = link;
console.log(val);