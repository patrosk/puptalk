const cache = {};

function importAll(request) {
    request.keys().forEach((key) => (cache[key] = request(key)));
}
importAll(require.context("../public/img", false, /\.jpg$/));

const images = Object.entries(cache).map(module => module[1].default);
var pupsArray = [];

images.map(image => (
    pupsArray.push(image)
))

// const pupsArray = require.context("../public/img", false, /\.jpg$/);

export default pupsArray;

console.log(pupsArray);