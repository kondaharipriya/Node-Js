import React, { useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import './App.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
const API_KEY = "f6dc4f4e7b873301bc6afaeb13e4ea58"; // Replace with your key
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";
const App = () => {
  const [city, setCity] = useState("Hyderabad");
  const [weatherData, setWeatherData] = useState(null);
  const fetchWeather = async (cityName) => {
    try {
      console.log("Fetching weather for:", cityName);
      // Fetch current weather
      const currentWeatherResponse = await axios.get(WEATHER_URL, {
        params: { q: cityName, units: "metric", appid: API_KEY },
      });
      console.log("Current Weather Data:", currentWeatherResponse.data);
      // Fetch 5-day forecast
      const forecastResponse = await axios.get(FORECAST_URL, {
        params: { q: cityName, units: "metric", appid: API_KEY },
      });
      console.log("Forecast Data:", forecastResponse.data);
      // Extract relevant data for the next 5 days
      const forecastData = forecastResponse.data.list.filter((entry, index) => index % 8 === 0).slice(0, 5);
      setWeatherData({
        currentTemp: currentWeatherResponse.data.main.temp,
        forecast: forecastData,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      alert("Could not fetch weather data. Please check the city name or try again later.");
    }
  };
  const handleSearch = () => {
    if (!city.trim()) {
      alert("Please enter a city name.");
      return;
    }
    fetchWeather(city);
  };
  return (
    <section className="weather-section">
      <div className="row justify-content-center mt-5 w-100">
        <div className="col-md-6">
          <div className="card weather-card">
            <div className="card-body">
              <h2>Weather Forecast</h2>
              <div className="weather-input-row">
                <input
                  type="text"
                  className="form-control weather-input"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter city name"
                />
                <button className="btn btn-primary weather-btn text-white" onClick={handleSearch}>
                  Get Weather
                </button>
              </div>
              {weatherData ? (
                <div className="weather-result">
                  <h4>Current Temperature in {city}: {weatherData.currentTemp}°C</h4>
                  <div className="weather-chart-box">
                    <Line
                      data={{
                        labels: weatherData.forecast.map((d) => new Date(d.dt * 1000).toLocaleDateString()),
                        datasets: [
                          {
                            label: `Temperature Forecast (°C)`,
                            data: weatherData.forecast.map((d) => d.main.temp),
                            borderColor: "blue",
                            backgroundColor: "rgba(0, 0, 255, 0.3)",
                          },
                        ],
                      }}
                      options={{
                        maintainAspectRatio: false,
                      }}
                    />
                  </div>
                </div>
              ) : (
                <p className="weather-empty">Enter a city and click "Get Weather"</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default App;