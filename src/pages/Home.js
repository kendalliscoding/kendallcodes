import headshot from "../photos/headshot.jpeg";
import "./Home.css";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <main>
        <div className="home">
          <img src={headshot} alt="kendall's headshot" />
          <h1 className="title_name"> Kendall Holmes </h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
