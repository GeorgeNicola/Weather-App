import React from "react";
import './WeatherDetailed.css';

const WeatherDetailed = (props) => (
    <div className="weather-detailed" style={{ backgroundImage: `url(${props.bg})`}}>
        <div className="temp-location">
            <span className="location"> {props.location} </span>
            <span className="temp"> {props.temp}&#176; </span>
        </div>
        <div className="details">
            <span>   Precipitatii: {props.precip}% </span>  <br/>
            <span>   Umiditate: {props.humidity}% </span>  <br/>
            <span>   Vant: {props.wind}km/h </span>  
        </div>
    </div>
);

export default WeatherDetailed;