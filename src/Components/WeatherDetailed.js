import React from "react";
import './WeatherDetailed.css';

const WeatherDetailed = (props) => (
    <div className="weather-detailed" style={{ backgroundImage: `url(${props.bg})`}}>
        <div className="temp-location">
            <span className="location"> {props.location} </span>
            <span className="temp"> {props.temp}&#176; </span>
        </div>
    </div>
);

export default WeatherDetailed;