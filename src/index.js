import './style.css';
import { callWeatherAPI } from './api-calling';
import { processData } from './data-processing';

const apiKey = '5KMT9JQ97HEHPVFB8AYPDUSPZ';
const form = document.querySelector('form');
const body = document.querySelector('body');

const content = document.createElement('div');
content.id = 'weatherContent';

const conditions = document.createElement('div');
conditions.id = 'conditions';

const title = document.createElement('div');
title.id = 'title';

const temperatureC = document.createElement('div');
temperatureC.id = 'tempC';

const temperatureF = document.createElement('div');
temperatureF.id = 'tempF';

const feelsLikeC = document.createElement('div');
feelsLikeC.id = 'feelsC';

const feelsLikeF = document.createElement('div');
feelsLikeF.id = 'feelsF';

const wind = document.createElement('div');
wind.id = 'wind';

const humidity = document.createElement('div');
humidity.id = 'humidity';

content.append(conditions, title, temperatureC, feelsLikeC, wind, humidity);

form.addEventListener('submit', (e) => {
  let city = document.getElementById('city').value;
  city = city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  callWeatherAPI(apiKey, city)
    .then((r) => processData(r))
    .then((r) => {
      if (r) {
        conditions.textContent = r.conditions;
        title.textContent = r.location;
        temperatureC.textContent = r.temperatureC + '°C';
        temperatureF.textContent = r.temperatureF;
        feelsLikeC.textContent = 'Feels Like: ' + r.feelsLikeC + '°C';
        feelsLikeF.textContent = r.feelsLikeF;
        wind.textContent = 'Wind: ' + r.wind + ' MPH';
        humidity.textContent = 'Humidity: ' + r.humidity + '%';
        body.append(content);
      }
    });
  document.getElementById('city').value = '';
  e.preventDefault();
});
