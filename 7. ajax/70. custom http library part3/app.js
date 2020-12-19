const http = new EasyHttp;

//Get users
// const data = http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  //User data 
  const userData = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
  }

  //Post data
// http.post('https://jsonplaceholder.typicode.com/users', userData)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

  //Put data
// http.put('https://jsonplaceholder.typicode.com/users/3', userData)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete data
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(msg => console.log(msg))
  .catch(err => console.log(err));