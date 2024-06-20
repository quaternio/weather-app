const html = require('./index.html');
const { Weather } = require('./lib/Weather'); 

class Forecast {
  constructor(weatherData) {
    this.data = weatherData; 

    this.town = this.data.town;
    this.state = this.data.state;
    this.time = this.data.time; // "YYY-mm-dd HH:MM"
    this.forecast = this.data.forecast;

    // TODO: implement populateHeadline (town, state, time)
    this.populateDays();
  }

  populateHeadline() {}

  populateDays() {
    this.forecast.forEach((day, idx) => {
      let dayElem = document.getElementById(`day-${idx+1}`);
      dayElem.innerHTML = "";

      if (day.icon) {
        let iconElem = document.createElement("img");
        iconElem.src = day.icon;
        dayElem.append(iconElem);
      }

      // TODO: Other stuff to display here!
    });
  }
}

(async () => {

  let fcParams = {
    days: 3
  };

  let form = document.getElementById("search-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Grab the zip code out of the search bar
    let zipCode = document.getElementById("search");
    fcParams.place = +zipCode.value; 

    let weather = new Weather();
    let weatherData = await weather.getForecast(fcParams);
    let forecast = new Forecast(weatherData);

    console.log(forecast.data);
    // TODO Pick up here (render forecast data via populateDay())
  });
})();
