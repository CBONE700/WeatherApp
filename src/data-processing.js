//Function to extract the required weather data out of the API
async function processData(jsonData) {
  try {
    const weatherObject = {
      conditions: jsonData.currentConditions.conditions,
      location: jsonData.address,
      temperatureF: jsonData.currentConditions.temp,
      temperatureC:
        Math.round(
          (((Number(jsonData.currentConditions.temp) - 32) * 5) / 9) * 10
        ) / 10,
      feelsLike: jsonData.currentConditions.feelslike,
      wind: jsonData.currentConditions.windspeed,
      humidity: jsonData.currentConditions.humidity,
    };
    weatherObject.location[0].toUpperCase();
    return weatherObject;
  } catch (e) {}
}

export { processData };
