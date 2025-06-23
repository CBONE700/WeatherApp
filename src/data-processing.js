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
      feelsLikeF: jsonData.currentConditions.feelslike,
      feelsLikeC:
        Math.round(
          (((Number(jsonData.currentConditions.feelslike) - 32) * 5) / 9) * 10
        ) / 10,
      wind: jsonData.currentConditions.windspeed,
      humidity: jsonData.currentConditions.humidity,
    };
    return weatherObject;
  } catch (e) {}
}

export { processData };
