
class Weather {
  constructor() {
    // Bad idea in the real world, don't ever do ever
    this.key = "d1057962e72541a781c161811243005";
    this.url = "http://api.weatherapi.com/v1/forecast.json"
  }

  async getForecast(place="97370", days=3) {
    return await fetch(`${this.url}?key=${this.key}&q=${place}&days=${days}`).then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP Error. Status: ${res.status}`);
      } 

      return res.json();
    });
  }
}

module.exports = {
  Weather
};
