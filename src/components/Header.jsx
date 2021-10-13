import React from "react";
import { Link } from "react-router-dom";

export default function Header({ link, page }) {
  return (
    <header className="header-container">
      <Link to="/">
        <img src="https://i.ibb.co/S7dZmMj/Group-10.png" alt="" />
      </Link>
      <Link to={link} className="link">
        {page}
      </Link>
    </header>
  );
}
