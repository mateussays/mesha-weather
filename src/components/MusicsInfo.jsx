import React, { useContext } from "react";
import weatherContext from "../context/weatherContext";

export default function MusicsInfo({ musics }) {
  const { handleMusics } = useContext(weatherContext);
  return (
    <div>
      <p>Listinha de músicas</p>
      {musics.map((item) => (
        <div key={item.track.key}>
          <p>{item.track.title}</p>
          <p>{item.track.subtitle}</p>
        </div>
      ))}
      <button onClick={handleMusics}>Gerar playlist personalizada!</button>
      <label htmlFor="save">
        Salvar Playlist
        <input type="checkbox" name="save" id="save" />
      </label>
    </div>
  );
}
