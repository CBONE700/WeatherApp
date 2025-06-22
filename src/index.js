import './style.css';
import { callWeatherAPI } from './api-calling';
import { processData } from './data-processing';

const apiKey = '5KMT9JQ97HEHPVFB8AYPDUSPZ';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  callWeatherAPI(apiKey, document.getElementById('city').value)
    .then((r) => processData(r))
    .then((r) => console.log(r));
  e.preventDefault();
});
