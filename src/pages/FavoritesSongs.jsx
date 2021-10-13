import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { convertToCelsius } from "../helpers";
import "./FavoritesSongs.css";

export default function FavoritesSongs() {
  const localFavorites = JSON.parse(localStorage.getItem("favoritesSongs"));
  const [favoritesMusics, setFavoriteMusics] = useState([]);

  useEffect(() => {
    return setFavoriteMusics(localFavorites);
  }, []);

  const removeFavorite = (evt, date) => {
    evt.preventDefault();
    const removeArr = favoritesMusics.filter(
      (favorite) => favorite.date !== date
    );
    setFavoriteMusics(removeArr);
    localStorage.setItem("favoritesSongs", JSON.stringify(removeArr));
  };

  return (
    <section className="save-songs-container">
      <Header link={"/"} page={"Home"} />
      <div className="songs-list">
        <h1>Suas playlists favoritas</h1>
        {favoritesMusics.map((favorite, index) => (
          <div key={index} className="list">
            <div>
              <p>
                <span>Cidade:</span> {favorite.city}
              </p>
              <p>
                <span>Data da Playlist:</span> {favorite.date}
              </p>
              <p>
                <span>Temperatura:</span>{" "}
                {convertToCelsius(favorite.temperature.main.temp)}º
              </p>
              <p>
                <span>Categoria:</span> {favorite.category}
              </p>
            </div>
            <div>
              {favorite.musics.map((music, index) => (
                <div key={index}>
                  <p>
                    <span>Música:</span> {music.track.title}
                  </p>
                  <p>
                    <span>Artista:</span> {music.track.subtitle}
                  </p>
                </div>
              ))}
            </div>
            <div>
              <button
                onClick={(evt) => removeFavorite(evt, favorite.date)}
                className="btn"
              >
                Remover playlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
