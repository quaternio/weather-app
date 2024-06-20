(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./reset.css */ "./src/reset.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ "./src/style.css"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./index.js */ "./src/index.js?dfde"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\">\n  <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0\" />\n  <" + "script src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" defer><" + "/script>\n  <title>Weather App</title>\n</head>\n<body>\n  <div id=\"header\">3-Day Forecast</div>\n\n  <nav class=\"menu\">\n    <form action=\"\" method=\"get\" id=\"search-form\">\n      <div class=\"form-container\">\n        <label for=\"search\">Enter Zip Code: </label>\n        <input type=\"text\" name=\"search\" id=\"search\" required />\n      </div>\n      <div class=\"form-container\">\n        <input type=\"submit\" value=\"Submit\" />\n      </div>\n      <div></div>\n    </form>\n  </nav>\n\n  <div id=\"headline\">\n    <div id=\"place\"></div>\n  </div>\n\n  <div id=\"forecast\">\n    <div id=\"day-1\" class=\"fc-day\"></div>\n    <div id=\"day-2\" class=\"fc-day\"></div>\n    <div id=\"day-3\" class=\"fc-day\"></div>\n  </div>\n</body>\n</html>\n";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/index.js?b635":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const html = __webpack_require__(/*! ./index.html */ "./src/index.html");
const { Weather } = __webpack_require__(/*! ./lib/Weather */ "./src/lib/Weather.js"); 

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


/***/ }),

/***/ "./src/lib/Weather.js":
/*!****************************!*\
  !*** ./src/lib/Weather.js ***!
  \****************************/
/***/ ((module) => {


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

  async getForecast({place="97370", days=3} = {}) {
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


/***/ }),

/***/ "./src/index.js?dfde":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d80e535dfde6e853fb97.js";

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "5ab6a17728bac305569f.css";

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "bbf66c66a8c56e6661b2.css";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js?b635"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQzFHLHlDQUF5QyxtR0FBOEI7QUFDdkUseUNBQXlDLG1HQUE4QjtBQUN2RSx5Q0FBeUMsc0dBQTZCO0FBQ3RFO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUU7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7O0FDWE47O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDckJBLGFBQWEsbUJBQU8sQ0FBQyxzQ0FBYztBQUNuQyxRQUFRLFVBQVUsRUFBRSxtQkFBTyxDQUFDLDJDQUFlOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLFVBQVUsSUFBSSxXQUFXOztBQUV0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsTUFBTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7OztBQ2pGRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQSxxQkFBcUIsdUJBQXVCLElBQUk7QUFDaEQsOEJBQThCLFNBQVMsT0FBTyxTQUFTLEtBQUssTUFBTSxRQUFRLEtBQUs7QUFDL0U7QUFDQSwrQ0FBK0MsV0FBVztBQUMxRDs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9saWIvV2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3Jlc2V0LmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vc3R5bGUuY3NzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbmRleC5qc1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcbjxoZWFkPlxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcbiAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxuICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIj5cXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjQsNDAwLDAsMFxcXCIgLz5cXG4gIDxcIiArIFwic2NyaXB0IHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGRlZmVyPjxcIiArIFwiL3NjcmlwdD5cXG4gIDx0aXRsZT5XZWF0aGVyIEFwcDwvdGl0bGU+XFxuPC9oZWFkPlxcbjxib2R5PlxcbiAgPGRpdiBpZD1cXFwiaGVhZGVyXFxcIj4zLURheSBGb3JlY2FzdDwvZGl2PlxcblxcbiAgPG5hdiBjbGFzcz1cXFwibWVudVxcXCI+XFxuICAgIDxmb3JtIGFjdGlvbj1cXFwiXFxcIiBtZXRob2Q9XFxcImdldFxcXCIgaWQ9XFxcInNlYXJjaC1mb3JtXFxcIj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJzZWFyY2hcXFwiPkVudGVyIFppcCBDb2RlOiA8L2xhYmVsPlxcbiAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIG5hbWU9XFxcInNlYXJjaFxcXCIgaWQ9XFxcInNlYXJjaFxcXCIgcmVxdWlyZWQgLz5cXG4gICAgICA8L2Rpdj5cXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWNvbnRhaW5lclxcXCI+XFxuICAgICAgICA8aW5wdXQgdHlwZT1cXFwic3VibWl0XFxcIiB2YWx1ZT1cXFwiU3VibWl0XFxcIiAvPlxcbiAgICAgIDwvZGl2PlxcbiAgICAgIDxkaXY+PC9kaXY+XFxuICAgIDwvZm9ybT5cXG4gIDwvbmF2PlxcblxcbiAgPGRpdiBpZD1cXFwiaGVhZGxpbmVcXFwiPlxcbiAgICA8ZGl2IGlkPVxcXCJwbGFjZVxcXCI+PC9kaXY+XFxuICA8L2Rpdj5cXG5cXG4gIDxkaXYgaWQ9XFxcImZvcmVjYXN0XFxcIj5cXG4gICAgPGRpdiBpZD1cXFwiZGF5LTFcXFwiIGNsYXNzPVxcXCJmYy1kYXlcXFwiPjwvZGl2PlxcbiAgICA8ZGl2IGlkPVxcXCJkYXktMlxcXCIgY2xhc3M9XFxcImZjLWRheVxcXCI+PC9kaXY+XFxuICAgIDxkaXYgaWQ9XFxcImRheS0zXFxcIiBjbGFzcz1cXFwiZmMtZGF5XFxcIj48L2Rpdj5cXG4gIDwvZGl2PlxcbjwvYm9keT5cXG48L2h0bWw+XFxuXCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiY29uc3QgaHRtbCA9IHJlcXVpcmUoJy4vaW5kZXguaHRtbCcpO1xuY29uc3QgeyBXZWF0aGVyIH0gPSByZXF1aXJlKCcuL2xpYi9XZWF0aGVyJyk7IFxuXG5jbGFzcyBGb3JlY2FzdCB7XG4gIGNvbnN0cnVjdG9yKHdlYXRoZXJEYXRhKSB7XG4gICAgdGhpcy5kYXRhID0gd2VhdGhlckRhdGE7IFxuXG4gICAgdGhpcy50b3duID0gdGhpcy5kYXRhLnRvd247XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuZGF0YS5zdGF0ZTtcbiAgICB0aGlzLnRpbWVzdGFtcCA9IHRoaXMuZGF0YS50aW1lOyAvLyBcIllZWS1tbS1kZCBISDpNTVwiXG5cbiAgICBsZXQgZGF5ID0gbmV3IERhdGUodGhpcy50aW1lc3RhbXApO1xuICAgIHRoaXMuZGF0ZSA9IGRheTtcbiAgICB0aGlzLmZvcmVjYXN0ID0gdGhpcy5kYXRhLmZvcmVjYXN0O1xuXG4gICAgdGhpcy5wb3B1bGF0ZUhlYWRsaW5lKCk7XG4gICAgdGhpcy5wb3B1bGF0ZURheXMoKTtcbiAgfVxuXG4gIHBvcHVsYXRlSGVhZGxpbmUoKSB7XG4gICAgbGV0IGhlYWRsaW5lRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGxpbmVcIik7XG4gICAgbGV0IHBsYWNlRWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGxhY2VcIik7XG5cbiAgICBwbGFjZUVsZW0uaW5uZXJIVE1MID0gYCR7dGhpcy50b3dufSwgJHt0aGlzLnN0YXRlfWA7XG5cbiAgICBoZWFkbGluZUVsZW0uYXBwZW5kKHBsYWNlRWxlbSk7XG4gIH1cblxuICBwb3B1bGF0ZURheXMoKSB7XG4gICAgdGhpcy5mb3JlY2FzdC5mb3JFYWNoKChkYXksIGlkeCkgPT4ge1xuICAgICAgbGV0IGRheUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgZGF5LSR7aWR4KzF9YCk7XG4gICAgICBkYXlFbGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgIGRheUVsZW0uc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgICBkYXlFbGVtLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgIGRheUVsZW0uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgICBkYXlFbGVtLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpICsgaWR4KTtcblxuICAgICAgbGV0IGRhdGVFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGRhdGVFbGVtLmlubmVySFRNTCA9IGRhdGUudG9EYXRlU3RyaW5nKCk7XG4gICAgICBkYXlFbGVtLmFwcGVuZChkYXRlRWxlbSk7XG5cbiAgICAgIGlmIChkYXkuYXZndGVtcF9mKSB7XG4gICAgICAgIGxldCB0ZW1wRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRlbXBFbGVtLmlubmVySFRNTCA9IGRheS5hdmd0ZW1wX2YgKyBcIiDCsEZcIjtcbiAgICAgICAgZGF5RWxlbS5hcHBlbmQodGVtcEVsZW0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF5Lmljb24pIHtcbiAgICAgICAgbGV0IGljb25FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaWNvbkVsZW0uc3JjID0gZGF5Lmljb247XG4gICAgICAgIGRheUVsZW0uYXBwZW5kKGljb25FbGVtKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHJhaW5FbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJhaW5FbGVtLmlubmVySFRNTCA9IGRheS5jaGFuY2VPZlJhaW4gKyBcIiUgQ2hhbmNlIG9mIFJhaW5cIjtcbiAgICAgIGRheUVsZW0uYXBwZW5kKHJhaW5FbGVtKTtcbiAgICB9KTtcbiAgfVxufVxuXG4oYXN5bmMgKCkgPT4ge1xuXG4gIGxldCBmY1BhcmFtcyA9IHtcbiAgICBkYXlzOiAzXG4gIH07XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIEdyYWIgdGhlIHppcCBjb2RlIG91dCBvZiB0aGUgc2VhcmNoIGJhclxuICAgIGxldCB6aXBDb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hcIik7XG4gICAgZmNQYXJhbXMucGxhY2UgPSAremlwQ29kZS52YWx1ZTsgXG5cbiAgICBsZXQgd2VhdGhlciA9IG5ldyBXZWF0aGVyKCk7XG4gICAgbGV0IHdlYXRoZXJEYXRhID0gYXdhaXQgd2VhdGhlci5nZXRGb3JlY2FzdChmY1BhcmFtcyk7XG4gICAgbGV0IGZvcmVjYXN0ID0gbmV3IEZvcmVjYXN0KHdlYXRoZXJEYXRhKTtcbiAgfSk7XG59KSgpO1xuIiwiXG5jbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gQmFkIGlkZWEgaW4gdGhlIHJlYWwgd29ybGQsIGRvbid0IGV2ZXIgZG8gZXZlclxuICAgIHRoaXMua2V5ID0gXCJkMTA1Nzk2MmU3MjU0MWE3ODFjMTYxODExMjQzMDA1XCI7XG4gICAgdGhpcy51cmwgPSBcImh0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvblwiXG4gIH1cblxuICBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgbGV0IGNsZWFuRGF0YSA9IHt9O1xuXG4gICAgY2xlYW5EYXRhLnRvd24gPSBkYXRhLmxvY2F0aW9uLm5hbWU7XG4gICAgY2xlYW5EYXRhLnN0YXRlID0gZGF0YS5sb2NhdGlvbi5yZWdpb247XG4gICAgY2xlYW5EYXRhLnRpbWUgPSBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZTtcblxuICAgIGNsZWFuRGF0YS5mb3JlY2FzdCA9IFtdO1xuICAgIGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgbGV0IGRheSA9IHt9O1xuXG4gICAgICBkYXkuZGF0ZSA9IGl0ZW0uZGF0ZTtcbiAgICAgIGRheS53ZWF0aGVyID0gaXRlbS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgICBkYXkuaWNvbiA9IGl0ZW0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgICAgZGF5LmF2Z3RlbXBfZiA9IGl0ZW0uZGF5LmF2Z3RlbXBfZjtcbiAgICAgIGRheS5jaGFuY2VPZlJhaW4gPSBpdGVtLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbjtcbiAgICAgIGRheS5wcmVjaXBpdGF0aW9uX21tID0gaXRlbS5kYXkudG90YWxwcmVjaXBfbW07XG5cbiAgICAgIGNsZWFuRGF0YS5mb3JlY2FzdC5wdXNoKGRheSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY2xlYW5EYXRhO1xuICB9XG5cbiAgYXN5bmMgZ2V0Rm9yZWNhc3Qoe3BsYWNlPVwiOTczNzBcIiwgZGF5cz0zfSA9IHt9KSB7XG4gICAgbGV0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHt0aGlzLnVybH0/a2V5PSR7dGhpcy5rZXl9JnE9JHtwbGFjZX0mZGF5cz0ke2RheXN9YCkudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgRXJyb3IuIFN0YXR1czogJHtyZXMuc3RhdHVzfWApO1xuICAgICAgfSBcblxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzRGF0YShkYXRhKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgV2VhdGhlclxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==