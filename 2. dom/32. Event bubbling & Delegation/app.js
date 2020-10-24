//event bubbling
// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// })

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// })

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// })

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// })

//event delegation
document.body.addEventListener('click', deleteItem);

function deleteItem(e){
  //is use e.target.parentElement.className === ''
  //it is not a great practice because it looks for entire string for className
  //what if they all have different className
  //a better way is to use 
  if (e.target.parentElement.classList.contains('delete-item')){
    console.log('delete item');
    e.target.parentElement.parentElement.remove(); //what you want is once click 'fa fa-remove' delete the whole thing, so need to use element traversal and get the parent element and delete whole thing
  }
}