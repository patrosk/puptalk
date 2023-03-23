// Use webpack to import all images in a directory
// save them temporarily in cache object
const cache = {};

// importAll function takes a require.context() as an argument
// and loops through all the files in the directory
// and saves them in the cache object
function importAll(request) {
    request.keys().forEach((key) => (cache[key] = request(key)));
}

// run the importAll function on the images directory
// fetch all files with .jpg extension
importAll(require.context("../public/img", false, /\.jpg$/));

// access the contents of the cache object
const images = Object.entries(cache);

// create an empty array
var pupsArray = [];

// loop through the images array and populate the empty array
images.map(image => (
    pupsArray.push(image[1])
))

export default pupsArray;