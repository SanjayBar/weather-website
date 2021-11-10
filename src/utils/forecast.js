const request = require("request");

const forecast = function (lat, lng, callback) {
  const url =
    "http://api.weatherstack.com/current?access_key=7344bc52ecc96590bdc028d93366ff32&query=" +
    lat +
    "," +
    lng +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "" +
          body.current.weather_descriptions[0] +
          ". It is currently " +
          body.current.temperature +
          " fahrenheit out. It feels like " +
          body.current.feelslike +
          " fahrenheit out."
      );
    }
  });
};

module.exports = forecast;
