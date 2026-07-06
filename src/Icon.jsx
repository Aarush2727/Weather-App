import { useEffect, useState } from "react";
import './Icon.css'
// import './Phone.css'


export default function Icon({ Data }) {
  if (!Data.weather) {
    return <div>Loading...</div>;
  }

  let icon = Data.weather[0].icon;

  return (
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="no icon" className="iccon"/>
  );
}