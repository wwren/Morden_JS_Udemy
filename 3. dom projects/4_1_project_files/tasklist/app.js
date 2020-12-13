//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load all event listeners
loadEventListeners();


// load all event listeners
function loadEventListeners() {
  //when page reload, reload the 
  document.addEventListener('DOMContentLoaded', printLocalStorage);
  //add task event 
  form.addEventListener('submit', addTask);
  //remove individual task event
  taskList.addEventListener('click', removeTask);
  //remove all tasks
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

//print local Storage to taskList 
function printLocalStorage(e){
  let tasks;
  if (localStorage.getItem('tasks') !== null) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  } else {
    tasks = [];
  }

  tasks.forEach(currTask => {  
    //create li element
    const li = document.createElement('li');
    //add class
    li.className = 'collection-item';
    //create text node & append to the li
    li.appendChild(document.createTextNode(currTask));
    //Create new link element
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    //add icon html
    link.innerHTML = '<i class = "fa fa-remove"> </i>';
    //append link to li
    li.appendChild(link);
    //Append li to the ul
    taskList.appendChild(li);
  })

}
// Add task
function addTask(e){
  taskInput.value === '' ? alert('Add a task') : '';

  //create li element
  const li = document.createElement('li');
  //add class
  li.className = 'collection-item';
  //create text node & append to the li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  //add icon html
  link.innerHTML = '<i class = "fa fa-remove"> </i>';
  //append link to li
  li.appendChild(link);
  //Append li to the ul
  taskList.appendChild(li);

  //add taskInput to localStorage
  storeTaskInLocalStorage(taskInput.value);

  e.preventDefault();
}

//add taskInput to localStorage
function storeTaskInLocalStorage(task){
  let taskList;

  //get the taskList or assign taskList to []
  localStorage.getItem('tasks') === null? taskList = [] : taskList = JSON.parse(localStorage.getItem('tasks'));

  taskList.push(task);

  localStorage.setItem('tasks', JSON.stringify(taskList));
}


// Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')){
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      // also want to remove it from the local storage
      removeFromLocalStorage(e.target.parentElement.parentElement);
    }      
  }
}

// Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function clearTasks() {
  taskList.innerHTML = '';

  while (!taskList.hasChildNodes){
    taskList.removeChild();
  }

  clearLocalStorage();
}

function clearLocalStorage() {
  localStorage.clear();
}

function filterTasks(e) {
  const filterCriteria = e.target.value.toLowerCase();

  const eachTaskItem = document.querySelectorAll('.collection-item');

  eachTaskItem.forEach(curr => {
    const taskItem = curr.firstChild.textContent.toLowerCase();
    taskItem.includes(filterCriteria) ? curr.style.display = 'block' : curr.style.display = 'none';
  });
}