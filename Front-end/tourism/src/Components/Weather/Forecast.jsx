import React, { useState } from "react";
import axios from "axios";
import "./weather.scss";

function Forecast() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0177ce8f606ac9afd2426554fd29f036`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((Response) => {
        setData(Response.data);
        console.log(Response);
      });
      searchLocation("");
    }
  };
  return (
    <div className="weather">
      <div className="container">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter Location"
            onKeyPress={searchLocation}
          ></input>
        </div>

        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp}°F </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              <p>Feels Like</p>
              {data.main ? (
                <p className="bold">{data.main.feels_like}</p>
              ) : null}
            </div>
            <div className="humidity">
              <p>Humidity</p>
              {data.main ? (
                <p className="bold">{data.main.humidity} %</p>
              ) : null}
            </div>
            <div className="wind">
              <p>Wind Speed</p>
              {data.main ? <p>{data.wind.speed} MPH</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Forecast;
