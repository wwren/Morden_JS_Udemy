let val;

val = document;

val = document.all;
val = document.all[3];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links;
val = document.links[1];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0]; //string tokenization

val = document.images;

val = document.scripts[0].getAttribute('integrity');

console.log(val);

let script = document.scripts;

let scriptArr = Array.from(script);

//forEach can only work with array, so convert script to an array variable 
scriptArr.forEach(function(curr) {
  console.log(curr.getAttribute('src'));
});

