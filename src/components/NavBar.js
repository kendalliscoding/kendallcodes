import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksClass = showLinks ? 'show-links' : 'hide-links';

  return (
    <nav className={linksClass}>
      <div id="hamburger-icon" onClick={() => setShowLinks(!showLinks)}>
        <div id="hamburger-bar1"></div>
        <div id="hamburger-bar2"></div>
        <div id="hamburger-bar3"></div>
      </div>
      <div className="nav-links">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/comingsoon">COMING SOON</NavLink>
      </div>
      <p id="site-title"> KENDALL CODES </p>
    </nav>
  );
};

export default NavBar;
