const apiKey = 'DIN_API_KEY';
const apiReadAccessToken = 'DIN_API_READ_ACCESS_TOKEN';
const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey;

fetch(url, {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer ' + apiReadAccessToken,
    'Content-Type': 'application/json;charset=utf-8'
  }
}).then(response => response.json()).then(data => console.log(data)).catch(error => console.error('Error:', error));