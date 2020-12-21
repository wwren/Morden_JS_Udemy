//ES5 Ajax -> prototype 
function easyHTTP(){
  this.http = new XMLHttpRequest(); //XML http object 
}
//REST API: HTTP request: get, post, put, delete, head, options, patch 

//Make an HTTP GET request 
easyHTTP.prototype.get = function(url, callback){
  this.http.open('GET', url, true);

  this.http.onload = () => {
    if(this.http.status === 200){ //if use function() this.http will be in the scope of this function and it is undefined 
      callback(null, this.http.responseText);
    } else {
      callback('Error: ' + this.http.status );
    }
  }

  this.http.send();
}
//Make an HTTP POST request 

//Make an HTTP PUT request 

//Make an HTTP DELETE request 

