const weather = {
    apiKey: "549fc3578e80926e9ad7c54dbda6e194",
    async fetchWeather(city) {
      const response = await (
        await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
        )
      ).json();
      console.log(response);
      this.displayData(response);
    },
    displayData(data) {
        
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
  // setGradientBackground(30, 0.5);
};
