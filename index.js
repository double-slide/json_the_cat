const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

if (breedName) {
  fetchBreedDescription(breedName, (error, data) => {
  
    if (error) {
      console.log(`Error fetch details:`, error);
    }
    
    if (data) {
      console.log(data);
    }
    
  });

} else {
  console.log("Bad input, please try again and specify breed to search using command: 'node breedFetcher.js [breed]'");
}