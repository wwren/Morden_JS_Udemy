class Ui {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.temp = document.getElementById('w-string');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.feels = document.getElementById('w-feels-like');
    this.wind = document.getElementById('w-wind');
    this.forecast = document.getElementById('dynamic-weather-forecast');
  }

  showWeather(data) {
    this.location.innerHTML = `${data.name}, ${data.sys.country ?? ''}`;
    this.desc.innerHTML = `${data.weather[0].description}`;
    const temperatureC = data.main.temp;
    const temperatureF = this.convertCToF(temperatureC);
    this.temp.innerHTML = `${temperatureC} C (${temperatureF} F)`
    this.icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    this.humidity.innerHTML = `humidity: ${data.main.humidity}%`;
    this.dewpoint.innerHTML = `visibility: ${data.visibility} meters`;
    this.feels.innerHTML = `feels like: ${data.main.feels_like} C (${this.convertCToF(data.main.feels_like)} F)`;
    this.wind.innerHTML = `wind speed: ${data.wind.speed} meter/sec`;

    
  }

  convertCToF(tempC) {
    return (parseInt(tempC)*1.8 + 32).toFixed(2)
  }

  showForecast(data) {
    this.forecast.innerHTML = '';
    let i=0;
    while(i < data.length)
    {
      let flexbox = `
      <div class="d-flex flex-column mb-2 border">
      <div class="p-1 text-info font-weight-bold">${data[i].dt_txt.split(' ')[0]}</div>
      <div class="d-flex flex-row">
        `;
      let flexItem = '';
      while((i+1)%8 != 0)
      { 
        flexItem += `
        <div class="d-flex flex-column">
        <img class="w-75 h-auto p-1" src='http://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png'>
        <div class="p-1">${data[i].dt_txt.split(' ')[1].split(':')[0].concat(':00')}</div>
        <div class="p-1">${data[i].main.feels_like}C</div>
        </div>
        `
        i++;
      }
      flexItem += `
        <div class="d-flex flex-column">
        <img class="w-75 h-auto p-1" src='http://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png'>
        <div class="p-1">${data[i].dt_txt.split(' ')[1].split(':')[0].concat(':00')}</div>
        <div class="p-1">${data[i].main.feels_like}C</div>
        </div>
        `
      flexbox += flexItem;
      flexbox += '</div></div>';
      this.forecast.innerHTML += flexbox;
      i++;
    }
  }

  showError(errorStatus)
  {
    const row = document.querySelector('#weather-card');

    let warning = document.createElement('div');
    warning.className = 'alert alert-danger';
    let warningText = document.createTextNode(`${errorStatus}. Please change to a valid location!`);
    warning.appendChild(warningText);
    row.prepend(warning);
  }

}