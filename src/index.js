const html = require('./index.html');
const { Weather } = require('./lib/Weather'); 

(async () => {
  let weather = new Weather();
  console.log(await weather.getForecast());
})();
