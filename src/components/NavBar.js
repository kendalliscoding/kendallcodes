import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <NavLink to="/">HOME</NavLink>
      </div>
      <div>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
      </div>
      <div>
        <NavLink to="/skills">SKILLS</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
