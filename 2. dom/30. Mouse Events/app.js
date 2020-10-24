const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// //click
// clearBtn.addEventListener('click', runEvent);

// //double click 
// clearBtn.addEventListener('dblclick', runEvent);

//mousedown
// clearBtn.addEventListener('mousedown', runEvent);

//mouseup 
// clearBtn.addEventListener('mouseup', runEvent);

// //mouseenter 
// card.addEventListener('mouseenter', runEvent);
// //mouseleave
// card.addEventListener('mouseleave', runEvent);
// //mouseover //hover over
// card.addEventListener('mouseover', runEvent);
// //mouseout 
// card.addEventListener('mouseout', runEvent);

// //mouse move 
card.addEventListener('mousemove', runEvent);
//mouse
//event handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}