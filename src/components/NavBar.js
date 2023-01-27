import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default NavBar;
