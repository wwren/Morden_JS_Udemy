async function getUsers() {
  //await the response from the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  //only proceed once it's resolved 
  const data = await response.json();

  //only proceed once second promise is resolved
  return data;

  //similar to fetch(url).then(res =? res.json).then(data => console.log(data))
}

getUsers().then(users => console.log(users));