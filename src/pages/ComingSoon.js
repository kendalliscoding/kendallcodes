import NavBar from "../components/NavBar";
import ContentBackground from "../components/ContentBackground";
import Footer from "../components/Footer";
import "./ComingSoon.css";
import constructionBear from "../photos/construction-bear.GIF";

const ComingSoon = () => {
  return (
    <div>
      <ContentBackground />
      <NavBar />
      <main id="main-coming-soon">
        <img id="construction-bear" src={constructionBear} alt="a bear, hammer, nails, and a wrench" />
        <section class="construction-text">
        <p> This website is under construction! </p>
        <p> Come back soon for more features~ </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon;
