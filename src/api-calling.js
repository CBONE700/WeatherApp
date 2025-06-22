//Calls the raw API
async function callWeatherAPI(key, city) {
  try {
    const response = await fetch(
      'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' +
        city +
        '?lang=en&key=' +
        key,
      { mode: 'cors' }
    );
    const cityWeatherData = await response.json();
    return cityWeatherData;
  } catch (e) {
    alert(city + ' not found.');
  }
}

export { callWeatherAPI };
