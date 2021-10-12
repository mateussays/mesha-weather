import React, { useEffect, useState } from "react";
import { temperaturePlaylist } from "../helpers";
import { getPlaylist, getTemperature } from "../services";
import weatherContext from "./weatherContext";
import axios from "axios";

export default function WeatherProvider({ children }) {
  const [temperature, setTemperature] = useState({});
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [musics, setMusics] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  //   useEffect(() => {
  //     async function getTemp() {
  //       const key = "63d816ad2332fc651bc33891519a32ae"
  //       const base = "https://api.openweathermap.org/data/2.5"
  //       const api_temp = `${base}/weather?q=Campinas&appid=${key}`;
  //       const response = await axios.get(api_temp);
  //       return setTemperature(response.data);
  //     }
  //       getTemp()
  // }, []);

  const handleMusics = async () => {
    const category = await temperaturePlaylist(temperature.main.temp);
    setCategory(category);
    const info = await getPlaylist(category);
    const result = setMusics(info.hits);
    return result;
  };

  const handleTemperature = async (evt, city) => {
    evt.preventDefault();
    const info = await getTemperature(city);
    const result = setTemperature(info);
    setShowInfo(true);
    setMusics([]);
    return result;
  };

  const context = {
    temperature,
    city,
    handleTemperature,
    setCity,
    handleMusics,
    musics,
    showInfo,
    category,
  };

  return (
    <div>
      <weatherContext.Provider value={context}>
        {children}
      </weatherContext.Provider>
    </div>
  );
}
