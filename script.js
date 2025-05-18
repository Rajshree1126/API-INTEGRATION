// Your OpenWeatherMap API key
const apiKey = "46797c6920d53b6fb00f52f398259462"; 

// Function to fetch weather data based on user input
async function getWeather() {
  // Get the value from the input field with id="cityInput"
  const city = document.getElementById("cityInput").value;

  // If no city is entered, show an alert and exit the function
  if (!city) return alert("Please enter a city name.");

  // Call the OpenWeatherMap API with the entered city name
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  );

  // If the response is not OK (e.g., city not found), show an error alert
  if (!response.ok) {
    alert("City not found. Please try again.");
    return;
  }

  // Convert the API response from JSON string to JavaScript object
  const data = await response.json();

  // Call function to display the weather data on the page
  displayWeather(data);
}

// Function to update the DOM with the fetched weather data
function displayWeather(data) {
  // Display the city and country name
  document.getElementById("cityName").textContent = `${data.name}, ${data.sys.country}`;

  // Display the weather description (e.g., "clear sky")
  document.getElementById("description").textContent = data.weather[0].description;

  // Display the temperature in Celsius
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;

  // Display the weather icon from OpenWeatherMap
  document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Unhide the result section if it was previously hidden
  document.getElementById("weatherResult").classList.remove("d-none");
}
