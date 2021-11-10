const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2FuamF5YmFybWFuIiwiYSI6ImNrdmtybXQ4aTBoYTcycGtsemZleGx5d3cifQ.5E4nyAXBkTNmV_kiL3nzIQ&limit=1";

  request({ url: url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to loaction services:", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
