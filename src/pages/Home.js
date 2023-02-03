import headshot from "../photos/headshot.jpeg";
import "./Home.css";
import NavBar from "../components/NavBar";
import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main>
        <div className="circle-img-crop">
          <img src={headshot} className="headshot" alt="kendall's headshot" />
        </div>
        <h1 className="title_intro"> Hey, I'm Kendall. </h1>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
