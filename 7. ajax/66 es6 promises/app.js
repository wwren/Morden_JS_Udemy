const posts = [
  {title: 'Post One', body:'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

// use ES6 not use callback function 
function createPost(post)
{
  return new Promise(function(resolve, reject) {
  setTimeout(function () {
    posts.push(post);

    const error = false;
    if (! error){
      resolve()
    } else{
      reject('Error: sometine went wrong');
    }
  }, 2000);
  });
}


// function createPost(post, callback){
//   setTimeout(function () {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

function getPosts() {
  setTimeout(function(){
  let output = '';
  posts.forEach(function (curr) {
    output += `<li> ${curr.title} </li>`;
  });
  document.body.innerHTML = output;
  }, 1000);
}

const post3 = {title: 'Post three', body: 'This is post three'};

// createPost(post3, getPosts);

createPost(post3).then(getPosts).catch(function(err){ //first createPost() & then getPost(), if there is error, catch the error.
  console.log(err);
});
