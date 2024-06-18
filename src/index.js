const html = require('./index.html');
const { Weather } = require('./lib/Weather'); 

class Forecast {
  constructor(weatherData) {
    this.data = weatherData; 

    this.town = this.data.town;
    this.state = this.data.state;
    this.time = this.data.time; // "YYY-mm-dd HH:MM"
  }

  populateDay(id) {
    let day = document.getElementById(id);

    // TODO Pick up here too!
  }
}

(async () => {
  let fcParams = {
    place: 97370,
    days: 3
  };

  let weather = new Weather();
  let forecast = new Forecast(weather.getForecast(fcParams));

  // TODO Pick up here! 
})();
