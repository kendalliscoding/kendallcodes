import "./Footer.css";
import linkedinLogo from "../photos/LI-In-Bug.png"
import githubLogo from "../photos/github-mark-white.png";

const Footer = () => {
  return (
    <footer>
      <a href="https://github.com/kendalliscoding">
        <img id="github-link" src={githubLogo} alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/kendallholmes/">
        <img id="linkedin-link" src={linkedinLogo} alt="linkedin logo" />
      </a>
      <div className="copyright">&copy; Kendall Holmes</div>
    </footer>
  );
};

export default Footer;
