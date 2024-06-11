
class Weather {
  constructor() {
    // Bad idea in the real world, don't ever do ever
    this.key = "d1057962e72541a781c161811243005";
    this.url = "http://api.weatherapi.com/v1/forecast.json"
  }

  processData(data) {
    let cleanData = {};

    cleanData.town = data.location.name;
    cleanData.state = data.location.region;
    cleanData.time = data.location.localtime;

    cleanData.forecast = [];
    data.forecast.forecastday.forEach((item) => {
      let day = {};

      day.date = item.date;
      day.weather = item.day.condition.text;
      day.icon = item.day.condition.icon;
      day.avgtemp_f = item.day.avgtemp_f;
      day.chanceOfRain = item.day.daily_chance_of_rain;
      day.precipitation_mm = item.day.totalprecip_mm;

      cleanData.forecast.push(day);
    });

    return cleanData;
  }

  async getForecast(place="97370", days=3) {
    let data = await fetch(`${this.url}?key=${this.key}&q=${place}&days=${days}`).then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error. Status: ${res.status}`);
      } 

      return res.json();
    });

    return this.processData(data);
  }
}

module.exports = {
  Weather
};
