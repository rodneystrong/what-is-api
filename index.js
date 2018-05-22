const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

//create a request var and assign a new XMLHttpRequest obj to it.
var request = new XMLHttpRequest();

//open connection with open() and use 'GET'
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

//use onload() to access the JSON data 
// request.onload = function () {
//   var data = JSON.parse(this.response);

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(movie => {
//       console.log(movie.title);
//       //container element
//       const card = document.createElement('div');
//       card.setAttribute('class', 'card');

//       //actual element holding content
//       const h1 = document.createElement('h1');
//       h1.textContent = movie.title;

//       //put the element inside our container var
//       container.appendChild(card);
//       card.appendChild(h1);
//     });
//   } else {
//     console.log('error');
//   }

// }

//using the fetch API
fetch('https://ghibliapi.herokuapp.com/films')
  .then(function (response) {
    console.log(response.status);
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson[0].title);
    myJson.map(movie => {
      console.log(movie.title);
    })
  });

//once done, send the request using send()
request.send();