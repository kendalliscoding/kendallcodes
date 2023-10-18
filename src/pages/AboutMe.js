import NavBar from "../components/NavBar";
import "./AboutMe.css";
import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import laughingHeadshot from "../photos/laughing-headshot.jpeg"

const AboutMe = () => {
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main id="main-aboutme">
        <section>
          <img id="laughing-headshot" src={laughingHeadshot} alt="Kendall Holmes laughing" />
          <h1 id="aboutme-title">
            ✨allow me to introduce myself✨
          </h1>
          <p class="aboutme-description"> I am a software engineer looking to use my technical powers for good. I love doing work that has a positive impact on the world and I strive to have a career that reflects this value. </p>
          <p class="aboutme-description">My professional experience includes hands on development experience as a Product Engineer at a Satellite Telecommunications company, as well as higher level experience as a Lead Instructor at a Full Stack Development Boot Camp. </p>
          <p class="aboutme-description"> Outside of work, I take pride in balancing my technical skills with creative endeavors; I have a background in competitive public speaking, a devotion to helping others, and a love of the arts. </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutMe;
