import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import { convertToCelsius } from "../helpers";
import MusicsInfo from "./MusicsInfo";

export default function WeatherInfo({ info }) {
  const { musics } = useContext(weatherContext);
  return (
    <div>
      <p>Temperatura:{convertToCelsius(info.main.temp)}</p>
      <p>Temperatura mínima:{convertToCelsius(info.main.temp_min)}</p>
      <p>Temperatura máxima:{convertToCelsius(info.main.temp_max)}</p>
      <p>Temperatura máxima:{info.name}</p>
      <div>
        <MusicsInfo musics={musics}/>
      </div>
    </div>
  );
}
