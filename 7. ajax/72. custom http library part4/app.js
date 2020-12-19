const http = new EasyHttp();

// Get 
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

//user data 
const userData = {
  name: 'Joe Doe',
  username: 'joedoe',
  email: 'jeodoe@email.com'
}

// // Post
// http.post('https://jsonplaceholder.typicode.com/users', userData)
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// Put
// http.put('https://jsonplaceholder.typicode.com/users/3', userData)
// .then(data => console.log(data))
// .catch(error => console.log(error));

// Delete
http.delete('https://jsonplaceholder.typicode.com/users/3')
  .then((data) => console.log(data))
  .catch(err => console.log(err));