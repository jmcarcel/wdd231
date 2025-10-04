const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = '093aea2f8d23da3b4d5838f48f4e5459'
const lat = '49.76'
const lon = '6.64'

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${myKey}`

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
        console.log(data);
        displayResults(data);  
    }
    else {
        throw Error(await response.text());
    }
  }
  catch (error) {
      console.log(error);
  }
}
apiFetch();

function displayResults(data) {
    console.log('hello')
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${______}.___`;
  let desc = data.weather[0].______;
  weatherIcon.setAttribute('___', _____);
  weatherIcon.setAttribute('___', _____);
  captionDesc.textContent = `${desc}`;
}