//create a request var and assign a new XMLHttpRequest obj to it.
var request = new XMLHttpRequest();

//open connection with open() and use 'GET'
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//use onload() to access the JSON data 
request.onload = function () {
  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      console.log(movie.title);
      console.log(movie.director);
      console.log(movie.release_date);
    });
  } else {
    console.log('error');
  }

}

//once done, send the request using send()
request.send();