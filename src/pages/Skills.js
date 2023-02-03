import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import SkillCard from "../components/SkillCard";
import "./Skills.css";
import skillsList from "../data/skills.json";

const Skills = () => {
  const skillCards = skillsList.map((entry) => {
    return <SkillCard title={entry.title} desc={entry.description} />;
  });
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main>
        <div className="cards">{skillCards}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
