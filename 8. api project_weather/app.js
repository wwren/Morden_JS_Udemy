const storage = new Storage();
const localData = storage.getLocationData(); 
const weather = new Weather(localData.city, localData.country);
const ui = new Ui();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
  weather.getWeather().then(
    data => ui.showWeather(data)).catch(error => ui.showError(error));
  weather.getForecast().then(data => ui.showForecast(data.list)).catch(error => error);

}


document.querySelector('.btn.btn-primary.btn-success').addEventListener('click', changeLocation);

function changeLocation() {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;

  
  storage.setLocationData(city, country);

  weather.changeLocation(city, country);
  getWeather();
}


