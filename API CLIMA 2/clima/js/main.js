document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "f9991db72ea210caadc8b9ea4a4174d3";
    const cityInput = document.getElementById("city");
    const searchButton = document.getElementById("search");
    const temperatureSpan = document.getElementById("temperature");
    const descriptionSpan = document.getElementById("description");

  
    searchButton.addEventListener("click", function() {
        const cityName = cityInput.value;
        fetchWeather(cityName);
    });
  
    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
    
                const temperature = data.main.temp;
                const description = data.weather[0].description;
  
                temperatureSpan.textContent = temperature + "°C";
                descriptionSpan.textContent = description;
            })
            .catch(error => {
                console.error("Error al obtener datos climáticos:", error);
            });
    }
  });