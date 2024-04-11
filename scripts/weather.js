function getWeather(local) {
    let currentWeather
    let temp

    const weatherTempEl = document.getElementById("weather-temp")
    const weatherDescEl = document.getElementById("weather-desc")

    var url = "https://api.weatherapi.com/v1/current.json?q=" + local + "&lang=pt&key=%2060a317d6705340afac104601241104";
    fetch(url).then(response => {
        return response.json();
    }).then(data => {
        currentWeather = data.current.condition.text;
        temp = data.current.temp_c + "°C";

        weatherTempEl.innerHTML = temp
        weatherDescEl.innerHTML = currentWeather
    });
}