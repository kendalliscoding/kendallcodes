import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">HOME</Link>
      </div>
      <div>
        <Link to="/aboutme">ABOUT ME</Link>
      </div>
    </nav>
  );
};

export default NavBar;
