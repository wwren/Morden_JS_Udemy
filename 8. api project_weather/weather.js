class Weather {
  constructor(city, country_code) {
    this.apiKey = '****';
    this.city = city;
    this.country_code = country_code;
  };


  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?&units=metric&q=${this.city},${this.country_code}&appid=${this.apiKey}`);

    if(!response.ok)
    {
      throw Error(response.statusText);
    } 
    else {
      const dailyWeather = await response.json();
      return dailyWeather;
    }
  }

  changeLocation(city, country_code){
    this.city = city;
    this.country_code = country_code;
  }

  async getForecast() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?&units=metric&q=${this.city},${this.country_code}&appid=${this.apiKey}`);
    

    if(!response.ok)
    {
      throw Error(response.statusText);
    } 
    else {
      const weatherForecast = await response.json();
      return weatherForecast;
    }
  }
}
