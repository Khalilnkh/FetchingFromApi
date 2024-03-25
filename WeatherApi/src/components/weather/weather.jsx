import React from 'react'
import "./weather.scss"

export default function Weather({location,time,weatherIcon,temp,humidity,wind,feelsLike,uv}) {
  return (
    <div class="weather">
      <h1 class="location">{location}</h1>
      <h3 class="time">{time}</h3>
      <img class="weather-icon" src={weatherIcon}/>
      <h1 class="temp">{temp}°C</h1>
      <div class="details">
        <div class="row">
          <div class="col">
            <img src="https://cdn-icons-png.flaticon.com/512/9402/9402865.png" />
            <div>
              <p>Humidity</p>
              <p class="humidity">{humidity}%</p>
            </div>
          </div>
          <div class="col">
            <img src="https://ssl.gstatic.com/onebox/weather/64/windy.png" />
            <div>
              <p>Wind speed</p>
              <p class="wind">{wind}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div >
              <p>Feels like</p>
              <p class="feels-like">{feelsLike}°C</p>
            </div>
          </div>
          <div class="col">
            <img src="https://thumbs.dreamstime.com/b/uv-index-icon-danger-level-sun-radiation-pictogram-ultraviolet-rays-safety-symbol-skin-care-protection-safe-uv-index-icon-283053257.jpg"/>
            <div>
              <p>UV Index</p>
              <p class="uv-index">{uv}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
