import React from "react";

export default function WeatherInfo({ info }) {
  return (
    <div>
      <p>Temperatura:{info.temp}</p>
      <p>Data:{info.date}</p>
      <p>Tempo:{info.description}</p>
      <p>Cidade:{info.city}</p>
      <p>Máxima de:{info.forecast[0].max}</p>
      <p>Mínima de:{info.forecast[0].min}</p>
    </div>
  );
}
