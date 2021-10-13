import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import WeatherInfo from "./WeatherInfo";
import "./SearchByCity.css";

export default function SearchByCity() {
  const { setCity, city, handleTemperature, temperature, showInfo } =
    useContext(weatherContext);

  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  };

  return (
    <section className="search-container">
      <div className="form-city">
        <div>
          <label htmlFor="city">
            Digite o nome da sua cidade:
            <input type="text" name="city" onChange={handleChangeCity} />
          </label>
        </div>
        <div>
          <button onClick={(evt) => handleTemperature(evt, city)}>
            Buscar
          </button>
        </div>
      </div>
      {showInfo ? <WeatherInfo info={temperature} /> : null}
    </section>
  );
}
