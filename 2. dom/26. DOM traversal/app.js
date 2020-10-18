let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;

//get child nodes
val = list.childNodes; //11 in total includes line break: inside text node //return nodeList
val = list.childNodes[1];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;
// node type
// 1 - element 
// 2 - attribute (deprecated)
// 3 - text node
// 8 - Comment
// 9 - document itself
// 10 - DocType


//get children element nodes
val = list.children; //returns html collection
val = list.children[1];
list.children[1].textContent = 'Hello';
//children of children 
val = list.children[3].children[0];
val = list.children[3].children[0].className;
list.children[3].children[0].id = 'test-link';
//first child
val = list.firstChild; //give me text node
val = list.firstElementChild; //give me first child element
//last child
val = list.lastChild; //give me text node
val = list.lastElementChild; //give me first child element
//count child node
val = list.childElementCount;

//get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

//get sibling node
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextSibling.nextElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling; //null since we listItem is the first child

console.log(val);