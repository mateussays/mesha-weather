import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import SearchByCity from "../components/SearchByCity";
import "./Home.css"

export default function Home() {
  return (
    <section>
      <Header link={"/favorites"} page={"Playlists Favoritas"}/>
      <SearchByCity />
    </section>
  );
}
