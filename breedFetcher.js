const request = require('request');
const http = require('http');
const searchBreed = process.argv[2];
const apiUrl = 'https://api.thecatapi.com/v1/breeds';
const apiSearch = '/search?q=';

request(apiUrl + apiSearch + searchBreed, (err, response, body) => {
  if (err) {console.log(err);}
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log('error');
  } else {
    console.log(data[0].description);
  }
})