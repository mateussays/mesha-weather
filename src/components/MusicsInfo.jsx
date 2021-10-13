import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";
import "./MusicsInfo.css";

export default function MusicsInfo({ musics }) {
  const { handleMusics, temperature, city, category, setChecked, checked } =
    useContext(weatherContext);

  const date = new Date();
  const fullDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  const saveInfoObj = {
    musics,
    date: fullDate,
    temperature,
    city,
    category,
  };

  const handleFavorites = () => {
    const localFavorites = JSON.parse(localStorage.getItem("favoritesSongs"));
    if (!checked) {
      setChecked(true);
      return localFavorites
        ? localStorage.setItem(
            "favoritesSongs",
            JSON.stringify([...localFavorites, saveInfoObj])
          )
        : localStorage.setItem("favoritesSongs", JSON.stringify([saveInfoObj]));
    }
    if (checked) {
      setChecked(false);
      return localStorage.setItem(
        "favoritesSongs",
        JSON.stringify(localFavorites.filter((value) => value.city !== city))
      );
    }
  };

  return (
    <div className="music-info-container">
      <div className="btn-container">
        <button onClick={handleMusics} className="btn">
          Que tal uma playlist?
        </button>
      </div>
      {musics.length > 0 ? <h1>Músicas selecionadas pra você</h1> : null}
      <div className="info-songs">
        {musics.map((item) => (
          <div key={item.track.key}>
            <p><span>Música</span>: {item.track.title}</p>
            <p><span>Artista</span>: {item.track.subtitle}</p>
          </div>
        ))}
      </div>
      {musics.length > 0 ? (
        <div className="fav">
          <input
              type="checkbox"
              name="save"
              id="save"
              onClick={handleFavorites}
              checked={checked}
            />
          <label htmlFor="save">
            Favoritar Playlist
          </label>
        </div>
      ) : null}
    </div>
  );
}
