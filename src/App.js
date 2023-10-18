import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/comingsoon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
