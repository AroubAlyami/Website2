import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ secretUnlocked, catsUnlocked }) {
  return (
    <nav className="nav">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/sunmoon">Sun & Moon</NavLink>
      <NavLink to="/laughs">Laughs</NavLink>
      <NavLink to="/texts">Texts</NavLink>
      <NavLink to="/learned">Learned</NavLink>
      <NavLink to="/gift">Gift</NavLink>
      <NavLink to="/cats">Cats</NavLink>

      {secretUnlocked && <NavLink to="/secret">Secret</NavLink>}
    </nav>
  );
}
