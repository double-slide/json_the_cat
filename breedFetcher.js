const request = require('request');

const urlInput = 'https://api.thecatapi.com/v1/breeds/search?q=';
const args = process.argv;
const breedType = args[2];

const catBreedDescrFetch = function(URL, breedToFetch) {
  
  const fullUrl = URL + breedToFetch;

  request(fullUrl, (error1, response, body) => {
    
    if (error1) {
      console.log(`Request returned the following error: ${error1}`);
      return;
    }
    
    const data = JSON.parse(body);

    if (data.length === 0 || !data[0].description) {
      console.log(`No information found for "${breedToFetch}"`);
      return;
    }

    console.log(`Results for search entry "${breedToFetch}":`);
    
    for (let result in data) {
      let searchResult = Number(result) + 1;
      console.log(`\nResult ${searchResult}:`, data[result].name);
      console.log(data[result].description);
    }
  
  });

};


if (!breedType) {
  console.log("Bad input, please try again with one argument: 'node breedFetcher.js [breed type]'");
} else {
  catBreedDescrFetch(urlInput, breedType);
}