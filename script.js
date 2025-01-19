const getWeather = (city) => {
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const { latitude, longitude } = data.results[0];
                
                // Fetch the weather forecast including current weather, daily min/max temps, humidity, sunrise and sunset times
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=relative_humidity_2m,cloudcover&timezone=auto`)
                    .then(response => response.json())
                    .then(weatherData => {
                        const weather = weatherData.current_weather;
                        const dailyData = weatherData.daily;
                        const hourlyData = weatherData.hourly;
                        const hourlyHumidity = hourlyData.relative_humidity_2m ? hourlyData.relative_humidity_2m[0]: "N/A";

                        if (weather) {
                            // Current weather data
                            document.getElementById('cityname').innerText = city;
                            document.getElementById('temp').innerText = weather.temperature;
                            document.getElementById('wind_speed').innerText = weather.windspeed;
                            document.getElementById('humidity').innerText = hourlyHumidity;
                            document.getElementById('wind_degrees').innerText = weather.winddirection;
                            const cloudCover = hourlyData.cloudcover ? hourlyData.cloudcover[0] : "N/A"; // Add fallback if not found
                            document.getElementById('cloud_pct').innerText = cloudCover;

                            // Fetch daily min and max temperatures
                            const maxTemp = dailyData.temperature_2m_max ? dailyData.temperature_2m_max[0] : 'N/A';
                            const minTemp = dailyData.temperature_2m_min ? dailyData.temperature_2m_min[0] : 'N/A';
                            
                            document.getElementById('max_temp').innerText = maxTemp;
                            document.getElementById('min_temp').innerText = minTemp;

                            // Fetch sunrise and sunset times
                            const sunrise = dailyData.sunrise ? dailyData.sunrise[0] : 'N/A';
                            const sunset = dailyData.sunset ? dailyData.sunset[0] : 'N/A';

                            document.getElementById('sunrise').innerText = sunrise;
                            document.getElementById('sunset').innerText = sunset;
                        } else {
                            console.error('Weather data not available.');
                        }
                    })
                    .catch(err => console.error('Error fetching weather data:', err));
            } else {
                console.error('City not found.');
            }
        })
        .catch(err => console.error('Error fetching geolocation data:', err));
};




const fetchDefaultLocationWeather = () => {
    fetch('https://ipapi.co/json/', { mode: 'no-cors' }) // Geolocation API based on IP
        .then(response => response.json())
        .then(data => {
            console.log('IP Location Response:', data); // Debugging
            const city = data.city;

            // If the city is available, fetch weather for the detected city
            if (city) {
                console.log(`Detected city: ${city}`);
                getWeather(city);
            } else {
                console.error('City not detected from IP');
                getWeather("Mississauga"); // Default to Mississauga if city isn't found
            }
        })
        .catch(err => {
            console.error('Error fetching IP-based location:', err);
            // In case of any error in the IP-based location fetch, fallback to Mississauga
            getWeather("Mississauga");
        });
};

// Predefined cities and corresponding IDs in the table
const predefinedCities = [
    { name: 'Washington', idPrefix: 'usa' },
    { name: 'Mumbai', idPrefix: 'ind' },
    { name: 'Toronto', idPrefix: 'cad' },
    { name: 'Seoul,South Korea', idPrefix: 'kr' },
    { name: 'London', idPrefix: 'uk' },
    { name: 'Moscow,Russia', idPrefix: 'eg' }
];

const getWeathers = (city, idPrefix) => {
    console.log(`Fetching weather data for ${city}`);
    
    // Geocoding to get latitude and longitude for the city
    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Geocoding response for ${city}:`, data);
            if (data.results && data.results.length > 0) {
                const { latitude, longitude } = data.results[0];
                console.log(`Coordinates for ${city}: Latitude ${latitude}, Longitude ${longitude}`);

                // Fetch weather data using latitude and longitude
                fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=relative_humidity_2m&timezone=auto`)
                    .then(response => response.json())
                    .then(weatherData => {
                        console.log(`Weather data for ${city}:`, weatherData);
                        const { temperature, windspeed, winddirection } = weatherData.current_weather;
                        const maxTemp = weatherData.daily.temperature_2m_max[0]; // Max temperature
                        const minTemp = weatherData.daily.temperature_2m_min[0]; // Min temperature
                        const hourlyHumidity = weatherData.hourly.relative_humidity_2m ? weatherData.hourly.relative_humidity_2m[0]: "N/A";


                        // Update the table
                        document.getElementById(`temp${idPrefix}`).textContent = temperature;
                        document.getElementById(`wind_speed${idPrefix}`).textContent = windspeed;
                        document.getElementById(`wind_degrees${idPrefix}`).textContent = winddirection;
                        document.getElementById(`max_temp${idPrefix}`).textContent = maxTemp;
                        document.getElementById(`min_temp${idPrefix}`).textContent = minTemp;
                        document.getElementById(`humidity${idPrefix}`).textContent = hourlyHumidity;
                    })
                    .catch(err => console.error(`Error fetching weather data for ${city}:`, err));
            } else {
                console.error(`No geocoding results found for ${city}`);
            }
        })
        .catch(err => console.error(`Error fetching geocoding data for ${city}:`, err));
};


// Iterate over predefined cities and fetch their weather data
predefinedCities.forEach(city => {
    getWeathers(city.name, city.idPrefix);
});


// Event listener for search button
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name.');
    }
});

// Fetch default weather based on user location
fetchDefaultLocationWeather();

