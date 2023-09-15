import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/aboutme">ABOUT ME</NavLink>
      <NavLink to="/skills">SKILLS</NavLink>
      <p id="site-title"> KENDALL CODES </p>
    </nav>
  );
};

export default NavBar;
