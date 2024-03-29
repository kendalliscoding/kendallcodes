import headshot from "../photos/headshot.jpeg";
import "./Home.css";
import NavBar from "../components/NavBar";
import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import Rain from "../components/Rain"

const Home = () => {
  // typewriter code from w3schools
  let currentLetter = 0;
  const txt = 'Hey, I\'m Kendall.'; /* The text */
  const speed = 70; /* The speed/duration of the effect in milliseconds */
  function typeWriter() {
    if (currentLetter < txt.length) {
      document.getElementById("title-intro").innerHTML += txt.charAt(currentLetter);
      currentLetter++;
      setTimeout(typeWriter, speed);
    }
  }

  

  return (
    <div>
      
      <ContentBackground />
      <NavBar />
      <Rain />
      <main className="main-home" onLoad={() => setTimeout(typeWriter, 1000)}>
        <div className="circle-img-crop">
          <img src={headshot} className="headshot" alt="kendall's headshot" />
        </div>
        <p id="title-intro"></p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
