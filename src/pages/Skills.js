import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SkillCard from "../components/SkillCard";
import "./Skills.css";
import skillsList from "../data/skills.json";
import QuestionBubble from "../components/QuestionBubble";
import helloWorldPython from "../photos/hello-world-python.GIF";

const Skills = () => {
  const skillCards = skillsList.map((entry, index) => {
    return <SkillCard 
            key={index}
            title={entry.title}
            desc={entry.description}
            position={index % 2 ? 'right-card' : 'left-card'}
            />;
  });
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main className="main-skills">
        <section>
          <QuestionBubble position="left-bubble" question="Most recent project?"/>
          <Projects />
        </section>
        <section>
          <QuestionBubble position="right-bubble" question="What programming languages/tools do you have experience with?" />
          <img id="hello-world-python" src={helloWorldPython} />
          <div className="cards">{skillCards}</div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
