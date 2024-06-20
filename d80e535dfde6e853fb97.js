const html = require('./index.html');
const { Weather } = require('./lib/Weather'); 

class Forecast {
  constructor(weatherData) {
    this.data = weatherData; 

    this.town = this.data.town;
    this.state = this.data.state;
    this.timestamp = this.data.time; // "YYY-mm-dd HH:MM"

    let day = new Date(this.timestamp);
    this.date = day;
    this.forecast = this.data.forecast;

    this.populateHeadline();
    this.populateDays();
  }

  populateHeadline() {
    let headlineElem = document.getElementById("headline");
    let placeElem = document.getElementById("place");

    placeElem.innerHTML = `${this.town}, ${this.state}`;

    headlineElem.append(placeElem);
  }

  populateDays() {
    this.forecast.forEach((day, idx) => {
      let dayElem = document.getElementById(`day-${idx+1}`);
      dayElem.style.display = "flex";
      dayElem.style.flexDirection = "column";
      dayElem.style.justifyContent = "center";
      dayElem.style.alignItems = "center";
      dayElem.innerHTML = "";

      let date = new Date();
      date.setDate(this.date.getDate() + idx);

      let dateElem = document.createElement("div");
      dateElem.innerHTML = date.toDateString();
      dayElem.append(dateElem);

      if (day.avgtemp_f) {
        let tempElem = document.createElement("div");
        tempElem.innerHTML = day.avgtemp_f + " °F";
        dayElem.append(tempElem);
      }

      if (day.icon) {
        let iconElem = document.createElement("img");
        iconElem.src = day.icon;
        dayElem.append(iconElem);
      }

      let rainElem = document.createElement("div");
      rainElem.innerHTML = day.chanceOfRain + "% Chance of Rain";
      dayElem.append(rainElem);
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
  });
})();
