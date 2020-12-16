const http = new easyHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', function(err, post){
  if (err){ //because when the status returned not 200, callback('Error: ' + this.http.status ); -> a not empty string is evaluated to be true -> so log error message
    console.log(err);
  }
  else {
    console.log(post);
  }
});
