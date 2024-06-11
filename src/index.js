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

    // TODO Pick up here!
  }
}

(async () => {
  let weather = new Weather();

     
})();
