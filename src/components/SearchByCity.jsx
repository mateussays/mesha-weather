import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import WeatherInfo from "./WeatherInfo";

export default function SearchByCity() {
  const {
    setCity,
    city,
    handleTemperature,
    temperature,
    showInfo,
  } = useContext(weatherContext);

  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  };


  return (
    <section>
      <form>
        <label htmlFor="city">
          Cidade:
          <input type="text" name="city" onChange={handleChangeCity} />
        </label>
        <button onClick={(evt) => handleTemperature(evt, city)}>
          Buscar
        </button>
      </form>
      {showInfo ? <WeatherInfo info={temperature} /> : null}
    </section>
  );
}
