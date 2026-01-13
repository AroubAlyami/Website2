import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav({ secretUnlocked }) {
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
      <NavLink to="/timeline">Timeline</NavLink>
      <NavLink to="/compliments">Compliments</NavLink>
      <NavLink to="/art-gallery">Art gallery</NavLink>
      <NavLink to="/yesno">Yes/No</NavLink>
      <NavLink to="/kanye">Kanye</NavLink>
      <NavLink to="/do-something">Do something</NavLink>




      {secretUnlocked && <NavLink to="/secret">Secret</NavLink>}
    </nav>
  );
}
