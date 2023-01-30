import headshot from "../photos/headshot.jpeg";
import "./Home.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="home_container">
          <div className="circle-img-crop">
            <img src={headshot} className="headshot" alt="kendall's headshot" />
          </div>
          <h1 className="title_intro"> Hey, I'm Kendall. </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
