import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">HOME</NavLink>
      {/* <NavLink to="/aboutme">ABOUT ME</NavLink> */}
      <NavLink to="/skills">SKILLS</NavLink>
      <NavLink to="/comingsoon">COMING SOON</NavLink>
      <p id="site-title"> KENDALL CODES </p>
    </nav>
  );
};

export default NavBar;
