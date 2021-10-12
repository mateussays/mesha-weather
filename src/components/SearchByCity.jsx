import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import { statesOfBrazil } from "../helpers";
import WeatherInfo from "./WeatherInfo";

export default function SearchByCity() {
  const { setCity, city, handleTemperature, temperature, setState, state } =
    useContext(weatherContext);

  const handleChangeCity = (evt) => {
    setCity(evt.target.value);
  };

  const handleChangeState = (evt) => {
    setState(evt.target.value);
  };

  return (
    <section>
      <form>
        <label htmlFor="city">
          Cidade:
          <input type="text" name="city" onChange={handleChangeCity} />
        </label>
        <select name="states" id="states" onChange={handleChangeState}>
          {statesOfBrazil.map((value) => (
            <option key={value}>{value}</option>
          ))}
        </select>
        <button onClick={(evt) => handleTemperature(evt, city, state)}>
          Buscar
        </button>
      </form>
      <WeatherInfo info={temperature} />
    </section>
  );
}
