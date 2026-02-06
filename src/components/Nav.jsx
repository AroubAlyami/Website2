import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ secretUnlocked }) {
  return (
    <nav className="nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/texts">Texts</NavLink>
      <NavLink to="/cats">Cats</NavLink>
      <NavLink to="/compliments">Compliments</NavLink>
      <NavLink to="/art-gallery">Art gallery</NavLink>
      <NavLink to="/yesno">Yes/No</NavLink>
      <NavLink to="/letters">Letters</NavLink>
      <NavLink to="/gift">Gift</NavLink>




      {secretUnlocked && <NavLink to="/secret">Secret</NavLink>}
    </nav>
  );
}
