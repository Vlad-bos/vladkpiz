import React from "react";

const Weather = (props) => (
  <div className="infoWeath">
  {props.city &&
    <div>
     <p>Місцезнаходження: {props.city}, {props.country}</p>
     <p>Погода: {props.weather}</p>
     <p>Атмосферний тиск: {props.pressure}</p>
     <p>Температура: {props.temp} °C</p>
     <p>Схід сонця: {props.sunrise}</p>
     <p> Захід сонця: {props.sunset} </p>
    </div>
  }
  <p className>{props.error}</p>
  </div>
);



export default Weather;
