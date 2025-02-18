import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_KEY = "228cf5ca021fb9bd19d354d4da2031cc";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=New York&appid=" + API_KEY + "&units=metric";

function Home() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => setWeather(response.data))
      .catch(error => console.error("Error fetching weather:", error));
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp}°C</p>
          <Link to={`/details/${weather.name}`}>See More</Link>
        </div>
      ) : (
        <p>Loading weather...</p>
      )}
    </div>
  );
}

export default Home;