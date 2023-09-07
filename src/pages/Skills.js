import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SkillCard from "../components/SkillCard";
import "./Skills.css";
import skillsList from "../data/skills.json";

const Skills = () => {
  const skillCards = skillsList.map((entry, index) => {
    return <SkillCard 
            key={index}
            title={entry.title}
            desc={entry.description}
            position={index % 2 ? 'right' : 'left'}
            />;
  });
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main className="main-skills">
        <Projects />
        <div className="cards">{skillCards}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
