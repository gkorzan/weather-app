const weather = {
    apiKey: "549fc3578e80926e9ad7c54dbda6e194",
    async fetchWeather(city) {
      const response = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`
        )
      ).json();
      this.displayData(response);
    },
    displayData(data) {
        const { name } = data;
        const { temp, humidity } = data.main;
        const { description, icon } = data.weather[0];
        const { speed: windSpeed } = data.wind; // meter per second
        console.log(name, Math.floor(temp), humidity, description, windSpeed);
        document.querySelector('.city').innerText = `Weather in ${name}`;
        document.querySelector('.temp').innerText = `${Math.floor(temp)} °C`;
        document.querySelector('.description').innerText = description;
        document.querySelector('.icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
        document.querySelector('.wind').innerText = `Wind speed: ${windSpeed} m/s`
    },
  };

setGradientBackground = (temprature, humidity) => {
  const TEMP_AMPLITUDE = 30;
  const MAX_COLOR_CHANAL_VALUE = 255;

  const gHumidity = humidity * MAX_COLOR_CHANAL_VALUE;
  if (Math.abs(temprature) > TEMP_AMPLITUDE) {
    temprature = TEMP_AMPLITUDE;
  }

  const gTemp =
    MAX_COLOR_CHANAL_VALUE -
    ((temprature + TEMP_AMPLITUDE) / (2 * TEMP_AMPLITUDE)) *
      MAX_COLOR_CHANAL_VALUE;

  document.body.style.setProperty(
    "background",
    `linear-gradient(15deg, rgba(0,${gHumidity},255,1) 0%, rgba(255,${gTemp},0,1) 100%)`
  );
};

window.onload = () => {
    weather.fetchWeather('Saint Petersburg')
    document.querySelector('.search').addEventListener('submit', (e) => {
        const city = document.querySelector(".search-bar").value;
        document.querySelector(".search-bar").value = '';
        weather.fetchWeather(city);
        e.preventDefault();
    });
};
