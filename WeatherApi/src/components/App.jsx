import React, { useState } from 'react';
import Search from './search/search';
import Weather from './weather/weather';
import './App.scss';

const API_KEY = 'f6f1838a8a1c41789a544643240502';

function App() {

  const [weatherInfo, setweatherInfo] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = async (city) => {
    try {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Location not found');
      }

      const data = await response.json();
      setweatherInfo(data);
      setError(null);

    } catch (error) {
      setError(error.message);
      setweatherInfo(null);
    }
  };
  
  const handleSearchChange = (city) => {
    getWeather(city);
  };

  return (
    <div className="card">
      <Search onSearchChange={handleSearchChange} />
      {weatherInfo && (
        <Weather
          location={weatherInfo.location.name}
          time={weatherInfo.location.localtime}
          weatherIcon={weatherInfo.current.condition.icon}
          temp={weatherInfo.current.temp_c}
          humidity={weatherInfo.current.humidity}
          wind={weatherInfo.current.wind_kph}
          feelsLike={weatherInfo.current.feelslike_c}
          uv={weatherInfo.current.uv}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
