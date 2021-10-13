import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import { convertToCelsius } from "../helpers";
import MusicsInfo from "./MusicsInfo";
import "./WeatherInfo.css";

export default function WeatherInfo({ info }) {
  const { musics } = useContext(weatherContext);

  return (
    <div className="weather-info">
      <div>
        <img
          src="https://i.ibb.co/g7PcLmN/rainy-day.png"
          alt="rainy-day"
          className="img-rainy"
        />
      </div>
      <div className="weather-temp">
        <h1>Temperatura agora em {info.name}</h1>
        <p>{convertToCelsius(info.main.temp)}°</p>
      </div>
      <div className="weather">
        <div>
          <p>Mínimo: {convertToCelsius(info.main.temp_min)}°</p>
          <p>Máximo: {convertToCelsius(info.main.temp_max)}º</p>
        </div>
        <div>
          <p>Latitude: {info.coord.lat}</p>
          <p>Longitude: {info.coord.lon}</p>
        </div>
      </div>
      <div>
        <MusicsInfo musics={musics} />
      </div>
    </div>
  );
}
