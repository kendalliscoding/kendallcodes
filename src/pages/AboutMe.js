import NavBar from "../components/NavBar";
import "./AboutMe.css";
import AboutMeEntry from "../components/AboutMeEntry";
import aboutMeEntries from "../data/aboutme-test.json";
import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";

const AboutMe = () => {
  const entries = aboutMeEntries.map((entry) => {
    return <AboutMeEntry title={entry.title} desc={entry.description} />;
  });
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main>
        <div className="entries">{entries}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
