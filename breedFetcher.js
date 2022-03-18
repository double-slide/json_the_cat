const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const urlInput = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const fullUrl = urlInput + breedName;

  request(fullUrl, (error, response, body) => {
    
    if (error) {
      callback(error, null);
    }
    
    const data = JSON.parse(body);

    if (data.length === 0) {
      callback('No data returned', null);
    }

    if (data.length !== 0) {
      const descr = data[0].description;
      callback(null, descr);
    }

  });

};

module.exports = { fetchBreedDescription };