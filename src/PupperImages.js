const cache = {};

function importAll(request) {
    request.keys().forEach((key) => (cache[key] = request(key)));
}
importAll(require.context("../public/img", false, /\.jpg$/));

const images = Object.entries(cache);
var pupsArray = [];

images.map(image => (
    pupsArray.push(image[1])
))

export default pupsArray;