# API-INTEGRATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: RAJSHREE MUNJABA BHALSHANKAR

*INTERN ID*: CT04DK771

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

# Live Weather App

This Live Weather App is a simple, interactive web application that allows users to fetch real-time weather information for any city in the world. It provides an intuitive interface where users can input the name of a city and instantly see up-to-date weather details such as temperature, weather conditions, and an illustrative weather icon. This project is designed to demonstrate the integration of a third-party weather API with modern web development technologies including HTML, CSS, JavaScript, and Bootstrap.

## Features

- **City-based Weather Search:** Users can enter any city name worldwide to retrieve its current weather conditions.
- **Clear Weather Information:** The app displays the city name, country code, temperature in Celsius, and a descriptive text about the weather (e.g., “clear sky”, “light rain”).
- **Weather Icons:** Visual icons representing the current weather condition make the information more engaging and easy to understand.
- **Responsive Design:** The app uses Bootstrap 5 to ensure it looks good on all screen sizes, from desktops to mobile devices.
- **Smooth UI Transitions:** CSS transitions create smooth animations when displaying the weather result section.

## Technologies Used

### HTML

- Structured using semantic HTML5 tags for better readability and SEO.
- Includes form elements like input fields and buttons to capture user interaction.
- Containers and layout elements organize the content clearly.

### CSS

- Custom CSS styles define the overall aesthetic of the app, including a calming gradient background that transitions from gray-blue to light blue.
- Uses modern fonts (Segoe UI) for clean and legible typography.
- Applies CSS transitions to create smooth fade-in effects for the weather results.
- Bootstrap 5 provides responsive grid layout, button styles, and utility classes for spacing and alignment.

### JavaScript

- Core logic written in plain JavaScript without external frameworks, ensuring simplicity and ease of understanding.
- Utilizes the modern `fetch` API with async/await syntax to handle HTTP requests asynchronously.
- Implements input validation to prevent empty requests.
- Handles API errors gracefully, notifying users when the city cannot be found.
- Dynamically updates the Document Object Model (DOM) with the fetched data to provide an interactive experience.
- Manipulates classes to show or hide elements smoothly.

### OpenWeatherMap API

- This app uses the OpenWeatherMap Current Weather Data API, a reliable and widely-used weather data service.
- Sends requests to fetch weather data by city name, specifying metric units to receive temperature in Celsius.
- Requires an API key for authentication, which secures the service and tracks usage.
- The API response includes detailed weather information such as temperature, weather conditions, icons, and geographical data.
- Icons are fetched directly from OpenWeatherMap’s icon URL scheme.

## How It Works

1. When the user loads the app, they see a clean and minimal interface with a text input field and a button labeled “Get Weather.”
2. The user types the name of any city they want to check the weather for.
3. Upon clicking the button, the app triggers the JavaScript function `getWeather()`.
4. This function first validates that the user has entered a city name. If not, it alerts the user to provide one.
5. If a city name is provided, the app constructs a URL with the city name and API key and sends a request to OpenWeatherMap.
6. The server responds with JSON data containing weather details.
7. If the city exists, the app extracts relevant data: city name, country code, temperature, weather description, and icon.
8. These details are then injected into the DOM elements inside the hidden weather result section.
9. The weather result section becomes visible with a smooth transition.
10. If the city is not found, the user is alerted with an appropriate message.

## User Experience

The app offers a simple and clean user interface with minimal distractions. The gradient background sets a calm mood, while the centered input field and button make interaction straightforward. Weather icons add a friendly visual cue to the data. The result panel is initially hidden to keep the UI uncluttered and only appears when valid data is fetched. Responsive design ensures usability on desktops, tablets, and smartphones.

---

This Live Weather App project serves as a practical example for beginners and intermediate developers to learn about working with APIs, handling asynchronous JavaScript, and creating dynamic, responsive web pages. The codebase is clean and modular, making it easy to extend and customize for future projects.
