document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //create an XHR object 
  const xhr = new XMLHttpRequest();

  //open 
  xhr.open('GET', 'data.txt', true); //want it to be asynchronise

  console.log('READYSTATE', xhr.readyState);

  xhr.onload = function(){
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1> ${this.responseText} </h1>`;
    }
  }
  //error state 
  xhr.onerror = function(){
    console.log('Request error...');
  }
  //optional - used for spinners/loaders
  xhr.onprogress = function(){
    console.log('READYSTATE', xhr.readyState); //will be at 3
    //then at this stage and put something like a spinner/loader
  }

  xhr.send();

  //ready state value
  //0: not initialized
  //1: server connection established
  //2: request received 
  //3: processing request
  //4: request finished and response is ready  //onlad is already at stage 4

  //HTTP Statuses
  //200: ok
  //403: forbidden
  //404: not found
}