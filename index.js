//create a request var and assign a new XMLHttpRequest obj to it.
var request = new XMLHttpRequest();

//open connection with open() and use 'GET'
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//use onload() to access the JSON data 
request.onload = function () {

}

//once done, send the request using send()
request.send();