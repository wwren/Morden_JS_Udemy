const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
]

//synchronise way
// function createPost(post){
//   setTimeout(function (){
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(function() {
//     let output = '';
//     posts.forEach(function(curr) {
//       output += `<li> ${curr.title} </li>`;
//     });

//     document.body.innerHTML = output;
//   }, 3000);
// }

//asynchronise way 
function createPost(post, callback){
  setTimeout(function (){
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts(){
  setTimeout(function() {
    let output = '';
    posts.forEach(function(curr) {
      output += `<li> ${curr.title} </li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post three', body: 'This is post three'}, getPosts);
