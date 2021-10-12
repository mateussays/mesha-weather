import React, { useState } from "react";
import { getTemperature } from "../services";
import weatherContext from "./weatherContext";

export default function WeatherProvider({ children }) {
  const [temperature, setTemperature] = useState([]);

  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleTemperature = async (evt, city, state) => {
    evt.preventDefault();
    const info = await getTemperature(city, state);
    const result = setTemperature(info);
    return result;
  };

  const context = {
    temperature,
    city,
    handleTemperature,
    setCity,
    setState,
    state,
  };

  return (
    <div>
      <weatherContext.Provider value={context}>
        {children}
      </weatherContext.Provider>
    </div>
  );
}
