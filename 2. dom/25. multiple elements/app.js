//getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[0].textContent = 'hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item'); //first find 'ul' then find the item with className

// console.log(listItems);

//document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// // console.log(lis);
// // console.log(lis[0]);
// // lis[0].style.color = 'red';
// // lis[0].textContent = 'red';


// // convert html collection to array
// lis = Array.from(lis);
// lis.reverse(); //reverse only works for array 
// lis.forEach(function(current, index) {
//   console.log(current.className);
//   current.textContent = `${index}: hello`;
// });


// console.log(lis);

//document.querySelectorAll()
const items = document.querySelectorAll('ul.collection li.collection-item'); //nodelist -> dont need to convert to array 

items.forEach(function(curr, index){
  curr.textContent = `${index}: hello`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(curr) {
  curr.style.background = '#ccc';
});

liEven.forEach(function(curr){
  curr.style.background = '#aaa';
});

for(let i = 0; i < liEven.length; i++){
  liEven[i].style.background = '#f4f4f4';
};

console.log(items);