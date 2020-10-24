const form = document.querySelector('form'); //just this example only have one form
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const selector = document.querySelector('select');
//clear input
//like when u submit a form, want to clear the input 
taskInput.value = '';

// form.addEventListener('submit', runEvent);

//keydown 
// taskInput.addEventListener('keydown', runEvent); //may want to catch each input with keydown 

//keyup
// taskInput.addEventListener('keyup', runEvent); 

//generalized keypress
// taskInput.addEventListener('keypress', runEvent);

//focus 
// taskInput.addEventListener('focus', runEvent); //when u click in

//blur 
// taskInput.addEventListener('blur', runEvent);

// //cut
// taskInput.addEventListener('cut', runEvent);

// //paste 
// taskInput.addEventListener('paste', runEvent);

//input
taskInput.addEventListener('input', runEvent); //input includes: cut, paste, 

//change event
selector.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  console.log(e.target.value);
  // //get input value 
  // console.log(taskInput.value); //something do to clear out the input after click submit
  // e.preventDefault(); // stop redirecting 

  heading.innerText = e.target.value;
}